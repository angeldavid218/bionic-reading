# Smart Reading

Smart Reading is a tool that helps you read faster and easier by using a technique called 'chunking'. It highlights the first portion of words to guide your eyes and improve reading speed and comprehension.

> **Note**: This library is inspired by the [smart Reading](https://smart-reading.com/) brand and technique. smart Reading is a trademarked reading method that uses strategic highlighting to guide eye fixation points. Smart Reading implements a similar approach as an open-source alternative.

## Features

- 🚀 **Fast Text Processing**: Efficiently processes text using the Intl.Segmenter API
- 🎯 **Customizable Fixation**: Adjust the percentage of each word to highlight
- 🏷️ **Flexible Tagging**: Use any HTML tag for highlighting (default: `strong`)
- 📦 **TypeScript Support**: Fully typed with TypeScript
- ✅ **Well Tested**: Comprehensive test coverage with Vitest
- 🔧 **Modular Architecture**: Clean, modular codebase with separate concerns

## Installation

```bash
npm install smart-reading
```

## Usage

### Basic Usage

```typescript
import { smartReading } from "smart-reading";

const text = "Hello, world!";
const result = smartReading(text, {
  fixationPercentage: 0.3,
  tag: "strong",
});

console.log(result);
// Output: "<strong>He</strong>llo, <strong>wo</strong>rld!"
```

### With Default Options

```typescript
import { smartReading, defaultOptions } from "smart-reading";

const text = "This is a sample text";
const result = smartReading(text, defaultOptions);
```

### Custom Options

```typescript
import { smartReading } from "smart-reading";

const text = "Custom highlighting example";
const result = smartReading(text, {
  fixationPercentage: 0.4, // Highlight 40% of each word
  tag: "em", // Use <em> tag instead of <strong>
});
```

## API Reference

### `smartReading(text: string, options: smartOptions): string`

The main function that converts text to smart reading format (inspired by smart Reading technique).

**Parameters:**

- `text` (string): The text to convert
- `options` (smartOptions): Configuration options

**Returns:** `string` - The text with smart reading formatting applied

### `smartOptions`

```typescript
interface smartOptions {
  fixationPercentage: number; // Percentage of word to highlight (0-1)
  tag?: string; // HTML tag to use (default: "strong")
}
```

### `defaultOptions`

```typescript
const defaultOptions = {
  fixationPercentage: 0.3,
  tag: "strong",
};
```

### Exported Functions

- `smartReading(text: string, options: smartOptions): string` - Main conversion function
- `segmentText(text: string): Segmenter[]` - Segment text into words and punctuation
- `wrapFixation(segment: string, options?: smartOptions): string` - Wrap a segment with fixation tags
- `defaultOptions: Options` - Default configuration options

### Exported Types

- `smartOptions` - Options interface for smart reading (inspired by smart Reading)
- `Options` - Type for default options
- `Segmenter` - Segment interface from text segmentation
- `WrapFixationProps` - Props for wrap fixation function

## How It Works

Smart Reading uses a technique inspired by smart Reading to improve reading speed and comprehension:

1. **Text Segmentation**: The text is segmented into words and punctuation using the `Intl.Segmenter` API
2. **Word Detection**: Only word-like segments are processed (punctuation and spaces are left unchanged)
3. **Fixation Calculation**: For each word, a fixation point is calculated based on the `fixationPercentage` - this mimics the smart Reading approach of highlighting the first portion of words
4. **Tag Wrapping**: The fixation portion of each word is wrapped with the specified HTML tag to create visual emphasis

## Development

### Prerequisites

- Node.js
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

The project uses [Vitest](https://vitest.dev/) for testing with coverage enabled.

### Development Mode

```bash
npm run dev
```

## Project Structure

```
src/
├── index.ts              # Main entry point (exports all modules)
├── convert.ts            # Main smart reading conversion function
├── segmenter.ts          # Text segmentation using Intl.Segmenter
├── options.ts            # Default options and types
├── types/
│   └── index.ts          # TypeScript type definitions
├── utils/
│   └── wrapFixation.ts   # Utility to wrap text with HTML tags
└── tests/
    ├── smartReading.test.ts
    ├── segmenter.test.ts
    └── utils/
        └── wrapFixation.test.ts
```

### Architecture

The project now uses a clean, modular architecture:

- **Text Segmentation**: Uses native `Intl.Segmenter` API for accurate word segmentation
- **Separation of Concerns**: Each module has a single responsibility
- **Type Safety**: Full TypeScript support with strict type checking
- **ES Modules**: Modern ES module syntax throughout

## License

ISC

## Author

Angel Serrano

## Repository

[GitHub Repository](https://github.com/angeldavid218/smart-reading)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues, please file them on the [GitHub Issues](https://github.com/angeldavid218/smart-reading/issues) page.
