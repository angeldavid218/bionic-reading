import { segmentText } from "./segmenter.js";
import type { SmartReadingOptions } from "./types/index.js";
import { wrapFixation } from "./utils/wrapFixation.js";

export function smartReading(text: string, options: SmartReadingOptions) {
  const segments = segmentText(text);

  return segments
    .map((segment) => {
      if (segment.isWordLike) {
        return wrapFixation(segment.segment, options);
      }

      return segment.segment;
    })
    .join("");
}
