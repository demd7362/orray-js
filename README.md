# TypeScript Utility Library

A lightweight, type-safe utility library providing common array and object manipulation functions.

## Features

- Comprehensive array manipulation utilities
- Type-safe implementations with TypeScript
- Zero dependencies
- Collection helpers (grouping, counting, partitioning)
- Array transformation functions
- Search and comparison utilities

## Installation

```bash
npm i orray-js
```

## Usage

```typescript
import { 
  counter, 
  similarity, 
  groupBy, 
  combination, 
  permutation 
} from 'orray-js'

// Count occurrences in an array
const counts = counter(['a', 'b', 'a', 'c'])
// Result: { a: 2, b: 1, c: 1 }

// Calculate similarity between two arrays
const sim = similarity([1, 2, 3], [1, 2, 4])
// Result: 0.67

// Group array elements
const grouped = groupBy([1, 2, 3, 4], x => x % 2)
// Result: { 0: [2, 4], 1: [1, 3] }
```

## API Reference

### Array Operations

#### `counter<T>(arr: T[]): Record<T, number>`
Counts occurrences of each element in an array.

#### `similarity<T>(left: T[], right: T[]): number`
Calculates similarity ratio between two arrays (0 to 1).

#### `combination(arr: string[], length: number): string[]`
Generates all possible combinations of given length.

#### `permutation(arr: string[], length: number): string[]`
Generates all possible permutations of given length.

### Collection Utilities

#### `groupBy<T, K>(arr: T[], fun: (x: T) => K): Record<K, T[]>`
Groups array elements by key function result.

#### `countBy<T, K>(arr: T[], fun: (x: T) => K): Record<K, number>`
Counts elements by key function result.

#### `uniqueBy<T>(arr: T[], fun: (x: T) => string | number): T[]`
Removes duplicates based on key function.

#### `partition<T>(arr: T[], predicate: (x: T) => boolean): [T[], T[]]`
Splits array into two arrays based on predicate.

### Array Transformation

#### `chunk<T>(arr: T[], size: number): T[][]`
Splits array into chunks of specified size.

#### `flatten(arr: any[], depth?: number, objectHandler?: ObjectHandler): any[]`
Flattens nested arrays and objects to specified depth.

### Mathematical Operations

#### `sum(arr: number[]): number`
Calculates sum of array elements.

#### `avg(arr: number[]): number`
Calculates average of array elements.

### Comparison Functions

#### `equals<T>(left: T[], right: T[]): boolean`
Checks if arrays are exactly equal (same elements in same order).

#### `equalsIgnoreSequence<T>(left: T[], right: T[]): boolean`
Checks if arrays contain same elements regardless of order.

### Search and Indexing

#### `binarySearch<T>(arr: T[], target: T): number`
Performs binary search on sorted array.

#### `indexByValue<T>(arr: T[]): Record<T, number>`
Creates map of values to their first index positions.

#### `deepFind<T>(obj: Record<any, any> | any[], target: T): T | undefined`
Searches deeply nested objects/arrays for target value.

### Object Utilities

#### `isPlainObject(arg: unknown): boolean`
Type guard for plain objects.

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
