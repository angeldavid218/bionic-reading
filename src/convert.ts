import { segmentText } from "./segmenter.ts";
import type { SmartReadingOptions } from "./types/index.ts";
import { wrapFixation } from "./utils/wrapFixation.ts";

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
