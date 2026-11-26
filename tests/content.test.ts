import { describe, expect, it } from "vitest";
import { getCards, normalizeCard } from "../src/lib/content";

describe("content boundary", () => {
  it("normalizes valid fields", () => {
    expect(normalizeCard({ title: " A ", description: " B " })).toEqual({
      title: "A",
      description: "B",
    });
  });

  it.each([null, undefined, 42, "text", {}, { title: "A" }])(
    "rejects malformed input: %s",
    (input) => expect(normalizeCard(input)).toBeNull(),
  );

  it("rejects blank fields", () => {
    expect(normalizeCard({ title: " ", description: "B" })).toBeNull();
    expect(normalizeCard({ title: "A", description: " " })).toBeNull();
  });

  it("provides three normalized demo cards", () => {
    expect(getCards().map((card) => card.title)).toEqual([
      "Validate",
      "Verify",
      "Build",
    ]);
  });
});
