// These types were lifted from Typescript's `lib.es6.ts` -> Float32Array.
// Two sets of edits were done:
//   1. they were slightly genericized
//   2. split into two interface, mutable and immutable. The mutating methods were removed for the immutable interface

/**
 * A generic readonly interface for Javascript typed arrays that removes all mutating methods
 */
interface ReadonlyTypedArray {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    readonly length: number;

    readonly [index: number]: number;
    [Symbol.iterator](): IterableIterator<number>;
    readonly [Symbol.toStringTag]: string;

    entries(): IterableIterator<[number, number]>;
    every(callbackfn: (value: number, index: number, array: this) => boolean, thisArg?: any): boolean;
    filter(callbackfn: (value: number, index: number, array: this) => any, thisArg?: any): this;
    find(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: this) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    keys(): IterableIterator<number>;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    map(callbackfn: (this: void, value: number, index: number, array: this) => number, thisArg?: any): this;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue?: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue?: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    slice(start?: number, end?: number): this;
    some(callbackfn: (value: number, index: number, array: this) => boolean, thisArg?: any): boolean;
    subarray(begin: number, end?: number): this;
    toLocaleString(): string;
    toString(): string;
    values(): IterableIterator<number>;
}

/**
 * A generic readonly interface for Javascript typed arrays
 */
interface TypedArray extends ReadonlyTypedArray {
    [index: number]: number;

    copyWithin(target: number, start: number, end?: number): this;
    fill(value: number, start?: number, end?: number): this;
    reverse(): this;
    set(array: ArrayLike<number>, offset?: number): void;
    sort(compareFn?: (a: number, b: number) => number): this;
}
