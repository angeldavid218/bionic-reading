import { segmentText } from "./segmenter.js";
import type { BionicOptions } from "./types/index.js";
import { wrapFixation } from "./utils/wrapFixation.js";

export function bionicReading(text: string, options: BionicOptions) {
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
