export function hasPunctuation(segment: string) {
  const punctuationRegex = /[.,!?;:"'(){}[\]\-—–—―«»„“”‘’]/;
  return punctuationRegex.test(segment);
}

export function hasSpace(segment: string) {
  return segment.includes(" ");
}
