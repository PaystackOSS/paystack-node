import { describe, it, expect } from "vitest";
import { ApiClient } from "../src/core/api-client.js";

describe("ApiClient", () => {
  it("can be constructed", () => {
    const client = new ApiClient({ secretKey: "sk_test_xxx" });
    expect(client).toBeDefined();
  });
});
