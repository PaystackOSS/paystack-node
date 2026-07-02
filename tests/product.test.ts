import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProductApi } from "../src/apis/product.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("ProductApi", () => {
  let resource: ProductApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new ProductApi(new ApiClient({} as ApiClientConfig));
  });

  describe("list", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).list(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).list(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("create", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).create(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("POST"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).create(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("fetch", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).fetch(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).fetch(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("update", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).update(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("PUT"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).update(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("delete_", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).delete_(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("DELETE"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).delete_(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });
});
