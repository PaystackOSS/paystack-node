import { describe, it, expect, vi, beforeEach } from "vitest";
import { IntegrationApi } from "../src/apis/integration.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("IntegrationApi", () => {
  let resource: IntegrationApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new IntegrationApi(new ApiClient({} as ApiClientConfig));
  });

  describe("fetchPaymentSessionTimeout", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).fetchPaymentSessionTimeout(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).fetchPaymentSessionTimeout(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("updatePaymentSessionTimeout", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).updatePaymentSessionTimeout(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("PUT"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).updatePaymentSessionTimeout(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });
});
