function bionicReading(text: string) {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const segments = segmenter.segment(text);
  console.log(segments);
  //  for (const segment of segments) {
  //     console.log(segment.segment);
  //  }
}

bionicReading("Hello, world!");
