import { describe, it, expect, vi, beforeEach } from "vitest";
import { DedicatedVirtualAccountApi } from "../src/apis/dedicated-virtual-account.js";
import type { ApiClientConfig } from "../src/core/types.js";

const mockRequest = vi.fn();

vi.mock("../src/core/api-client.js", () => ({
  ApiClient: vi.fn(function ApiClientMock() {
    return { request: mockRequest };
  }),
}));

describe("DedicatedVirtualAccountApi", () => {
  let resource: DedicatedVirtualAccountApi;

  beforeEach(async () => {
    mockRequest.mockReset();
    const { ApiClient } = await import("../src/core/api-client.js");
    resource = new DedicatedVirtualAccountApi(new ApiClient({} as ApiClientConfig));
  });

  describe("dedicatedAccountList", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountList(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountList(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountCreate", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountCreate(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("POST"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountCreate(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountAssign", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountAssign(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("POST"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountAssign(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountFetch", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountFetch(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountFetch(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountDeactivate", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountDeactivate(...Array(2).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("DELETE"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountDeactivate(...Array(2).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountRequery", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountRequery(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountRequery(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountAddSplit", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountAddSplit(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("POST"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountAddSplit(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountRemoveSplit", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountRemoveSplit(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("DELETE"),
        expect.any(String),
        expect.anything()
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountRemoveSplit(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });

  describe("dedicatedAccountAvailableProviders", () => {
    it("calls the correct endpoint on success", async () => {
      mockRequest.mockResolvedValue({ status: true, message: "ok", data: {} });
      await (resource as any).dedicatedAccountAvailableProviders(...Array(0).fill("test"));
      expect(mockRequest).toHaveBeenCalledWith(
        expect.stringContaining("GET"),
        expect.any(String)
      );
    });

    it("propagates errors from the HTTP client", async () => {
      mockRequest.mockRejectedValue(new Error("API Error"));
      await expect(
        (resource as any).dedicatedAccountAvailableProviders(...Array(0).fill("test"))
      ).rejects.toThrow();
    });
  });
});
