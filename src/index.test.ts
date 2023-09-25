import { generate } from "../src";

describe("generate", () => {
  test("generates a default hash", () => {
    const hash = generate();

    expect(hash).toHaveLength(16);
  });

  test("generates a hash with prefix", () => {
    const hash = generate({ prefix: "cli" });

    expect(hash).toHaveLength(20);
    expect(hash).toContain("cli_");
  });

  test("generates a hash with size", () => {
    const hash = generate({ size: 32 });

    expect(hash).toHaveLength(32);
  });
});
