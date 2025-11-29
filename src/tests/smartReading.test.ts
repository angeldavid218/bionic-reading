import { describe, it, expect } from "vitest";
import { smartReading } from "../convert.ts";
describe("Smart Reading", () => {
  it("Should return the text with the smart reading", () => {
    const text = "Hello, world!";
    const result = smartReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe("<strong>He</strong>llo, <strong>wo</strong>rld!");
  });

  it("Should return empty string if the text is empty", () => {
    const text = "";
    const result = smartReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe("");
  });

  it("Should return the text with no tag if only punctuation is present", () => {
    const text = ",,,,";
    const result = smartReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe(",,,,");
  });
});
