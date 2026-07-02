import { describe, it, expect, vi, beforeEach } from "vitest";
import { SettlementApi } from "../src/apis/settlement.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("SettlementApi", () => {
  let resource: SettlementApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new SettlementApi(new ApiClient({} as ApiClientConfig));
  });

  describe("settlementsFetch", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).settlementsFetch(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).settlementsFetch(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("settlementsTransaction", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).settlementsTransaction(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).settlementsTransaction(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });
});
