import { describe, it, expect, vi, beforeEach } from "vitest";
import { DirectDebitApi } from "../src/apis/direct-debit.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("DirectDebitApi", () => {
  let resource: DirectDebitApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new DirectDebitApi(new ApiClient({} as ApiClientConfig));
  });

  describe("directdebitTriggerActivationCharge", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).directdebitTriggerActivationCharge(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("PUT"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).directdebitTriggerActivationCharge(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("directdebitListMandateAuthorizations", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).directdebitListMandateAuthorizations(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).directdebitListMandateAuthorizations(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });
});
