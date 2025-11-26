import type { BionicOptions } from "../types/index.js";
import { defaultOptions } from "../options.js";
export function wrapFixation(segment: string, options: BionicOptions) {
  const { fixationPercentage, tag } = { ...defaultOptions, ...options };

  const fixationLength = Math.ceil(segment.length * fixationPercentage);
  const fixation = segment.slice(0, fixationLength);
  const rest = segment.slice(fixationLength);
  return `<${tag}>${fixation}</${tag}>${rest}`;
}
