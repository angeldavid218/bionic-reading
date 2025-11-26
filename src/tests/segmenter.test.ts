import { it, expect, describe } from "vitest";
import { segmentText } from "../segmenter.js";

describe("Segmenter", () => {
  it("Should return an array of segments", () => {
    const text = "Hello, world!";
    const result = segmentText(text);
    expect(result).toStrictEqual([
      {
        segment: "Hello",
        index: 0,
        input: "Hello, world!",
        isWordLike: true,
      },
      { segment: ",", index: 5, input: "Hello, world!", isWordLike: false },
      { segment: " ", index: 6, input: "Hello, world!", isWordLike: false },
      {
        segment: "world",
        index: 7,
        input: "Hello, world!",
        isWordLike: true,
      },
      {
        segment: "!",
        index: 12,
        input: "Hello, world!",
        isWordLike: false,
      },
    ]);
  });

  it("Should return an empty array if the text is empty", () => {
    const text = "";
    const result = segmentText(text);
    expect(result).toEqual([]);
  });
});
