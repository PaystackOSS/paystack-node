export type QueryValue = string | number | boolean | Array<string | number | boolean>;

export interface ApiClientConfig {
  secretKey: string;
}

export interface ApiRequestOptions<TQuery = Record<string, unknown>> {
  query?: TQuery;
  headers?: Record<string, string>;
  body?: unknown;
}

export interface ApiResponse<T = unknown> {
  status: boolean;
  message: string;
  data: T;
}
