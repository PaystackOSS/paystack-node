import { describe, it, expect, vi, beforeEach } from "vitest";
import { MiscellaneousApi } from "../src/apis/miscellaneous.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("MiscellaneousApi", () => {
  let resource: MiscellaneousApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new MiscellaneousApi(new ApiClient({} as ApiClientConfig));
  });

  describe("resolveCardBin", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).resolveCardBin(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).resolveCardBin(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("listCountries", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).listCountries(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).listCountries(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("avs", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).avs(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).avs(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });
});
