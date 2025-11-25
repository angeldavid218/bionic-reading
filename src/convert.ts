import { segmentText } from "./segmenter.js";
import { wrapFixation } from "./utils/wrapFixation.js";

export function bionicReading(
  text: string,
  fixationPercentage: number = 0.3,
  tag = "strong"
) {
  const segments = segmentText(text);

  return segments
    .map((segment) => {
      if (segment.isWordLike) {
        return wrapFixation({
          segment: segment.segment,
          fixationPercentage,
          tag,
        });
      }

      return segment.segment;
    })
    .join("");
}
