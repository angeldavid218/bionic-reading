export interface WrapFixationProps {
  segment: string;
  fixationPercentage: number;
  tag: string;
}

export interface BionicOptions {
  fixationPercentage: number;
  tag?: string;
}

export interface Segmenter {
  index: number;
  input: string;
  isWordLike: boolean;
  segment: string;
}
