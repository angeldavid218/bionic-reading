import type { WrapFixationProps } from "../types/index.js";

export function wrapFixation({
  segment,
  fixationPercentage,
  tag,
}: WrapFixationProps) {
  const fixationLength = Math.ceil(segment.length * fixationPercentage);
  const fixation = segment.slice(0, fixationLength);
  const rest = segment.slice(fixationLength);
  return `${tag}${fixation}${tag}${rest}`;
}
