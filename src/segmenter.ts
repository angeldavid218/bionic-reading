export function segmentText(text: string) {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const segments = [...segmenter.segment(text)];
  return segments.filter((segment) => segment.segment.length > 0);
}
