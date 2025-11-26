import { describe, it, expect } from "vitest";
import { bionicReading } from "../convert.js";
describe("Bionic Reading", () => {
  it("Should return the text with the bionic reading", () => {
    const text = "Hello, world!";
    const result = bionicReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe("<strong>He</strong>llo, <strong>wo</strong>rld!");
  });

  it("Should return empty string if the text is empty", () => {
    const text = "";
    const result = bionicReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe("");
  });

  it("Should return the text with no tag if only punctuation is present", () => {
    const text = ",,,,";
    const result = bionicReading(text, {
      fixationPercentage: 0.3,
      tag: "strong",
    });
    expect(result).toBe(",,,,");
  });
});
