import { ApiClientConfig, ApiRequestOptions, QueryValue } from "./types.js";
import { ApiError } from "./errors.js";

function toQueryString(query: Record<string, unknown> | undefined): string {
  if (!query) {
    return "";
  }

  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        search.append(key, String(item));
      }
      continue;
    }

    search.append(key, String(value));
  }

  const out = search.toString();
  return out ? `?${out}` : "";
}

export class ApiClient {
  private static readonly BASE_URL = "https://api.paystack.co";
  private static readonly TIMEOUT_MS = 30_000;

  private readonly secretKey: string;

  constructor(config: ApiClientConfig) {
    this.secretKey = config.secretKey;
  }

  async request<TResponse = unknown, TQuery = Record<string, unknown>>(
    method: string,
    path: string,
    options: ApiRequestOptions<TQuery> = {}
  ): Promise<TResponse> {
    const url = `${ApiClient.BASE_URL}${path}${toQueryString(options.query as Record<string, unknown> | undefined)}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), ApiClient.TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
          ...(options.headers ?? {}),
        },
        body: options.body === undefined ? undefined : JSON.stringify(options.body),
        signal: controller.signal,
      });

      const text = await response.text();
      const payload = text ? JSON.parse(text) : undefined;

      if (!response.ok) {
        throw new ApiError(response.status, response.statusText, payload);
      }

      return payload as TResponse;
    } finally {
      clearTimeout(timeout);
    }
  }
}
