export class ApiError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly payload?: unknown;

  constructor(status: number, statusText: string, payload?: unknown) {
    super(`Paystack API request failed with status ${status} (${statusText})`);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.payload = payload;
  }
}
