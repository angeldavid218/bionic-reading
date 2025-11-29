import type { SmartReadingOptions } from "../types/index.ts";
import { defaultOptions } from "../options.ts";
export function wrapFixation(segment: string, options?: SmartReadingOptions) {
  const { fixationPercentage, tag } = { ...defaultOptions, ...options };

  const fixationLength = Math.ceil(segment.length * fixationPercentage);
  const fixation = segment.slice(0, fixationLength);
  const rest = segment.slice(fixationLength);
  return `<${tag}>${fixation}</${tag}>${rest}`;
}
