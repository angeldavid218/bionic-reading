import { it, expect, describe } from "vitest";
import { wrapFixation } from "../../utils/wrapFixation.js";

describe("WrapFixation", () => {
  it("Should wrap the segment with the tag and the fixation percentage", () => {
    const segment = "Hello, world!";
    const options = {
      fixationPercentage: 0.3,
      tag: "strong",
    };
    const result = wrapFixation(segment, options);
    expect(result).toBe("<strong>Hell</strong>o, world!");
  });

  it("Should add the proper tag if its provided", () => {
    const segment = "Hello, world!";
    const options = {
      fixationPercentage: 0.3,
      tag: "em",
    };
    const result = wrapFixation(segment, options);
    expect(result).toBe("<em>Hell</em>o, world!");
  });
});
