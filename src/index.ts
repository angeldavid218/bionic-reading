import { hasPunctuation, hasSpace } from "./regex.js";

function bionicReading(text: string, fixationPercentage: number = 0.3) {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const segments = segmenter.segment(text);
  for (const segment of segments) {
    if (hasPunctuation(segment.segment)) {
      continue;
    }
    if (hasSpace(segment.segment)) {
      continue;
    }

    const fixationLength = Math.ceil(
      segment.segment.length * fixationPercentage
    );
    const fixation = segment.segment.slice(0, fixationLength);
    const rest = segment.segment.slice(fixationLength);
    console.log(
      `<span class="fixation">${fixation}</span> <span class="rest">${rest}</span>`
    );
  }
}

bionicReading("<p>Hello, world!</p>");
