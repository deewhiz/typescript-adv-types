# TypedArray and ReadonlyTypedArray
Generic interfaces, mutable and immutable, for typed arrays: Uint8Array, Float32Array, etc.

-----

## Creation
Directly from a new typed array
```
const fa1: TypedArray = new Float32Array();
const roFA: ReadonlyTypedArray = new Float32Array();
```

From an existing typed array
```
const fAry = new Float32Array();
const fa2: TypedArray = f;
```

## Use with DeepReadonly\<T\>
```
// A long type name just to be extra clear
type DeepReadonlyWithTypedArray<T> = {
    readonly [P in keyof T]:
        T[P] extends ReadonlyTypedArray | TypedArray ? ReadonlyTypedArray : DeepReadonly<T[P]>;
};
```

-----

## Issue with Typescript (as of 3.7.3)
#### Iterating a `Readonly<Float32Array>`
```
const floatArray: Readonly<Float32Array> = new Float32Array([1, 2, 3, 2, 1]);

for (const el of floatArray) {}
// Error: Type 'Readonly<Float32Array>' is not an array type or a string type or
// does not have a '[Symbol.iterator]()' method that returns an iterator. ts(2549)
```

This issue carries over to the `TypedArray` as well. `for..of` does not work with `Readonly<TypedArray>` directly.

#### A Workaround
Redefine `Readonly`
```
type Readonly<T> = T extends ReadonlyTypedArray | TypedArray ? ReadonlyTypedArray : {
    readonly [P in keyof T]: T[P];
};
```

#### Use with DeepReadonly<T>
A similar issue and workaround is present with `DeepReadonly<TypedArray>`
```
type DeepReadonlyWithTypedArray<T> = T extends ReadonlyTypedArray | TypedArray ? ReadonlyTypedArray : DeepReadonly<T>;

```

-----

## Errors
1. Trying to iterate a `ReadonlyTypedArray` with `for..of` (as mentioned previously)
2. Calling mutating methods on a `ReadonlyTypedArray`
```
const roFA: ReadonlyTypedArray = new Float32Array(10);
roFA.fill(); // `fill` doesn't exist on the `ReadonlyTypedArray` interface, otherwise you could mutate a readonly variable
```
3. Assigning a `ReadonlyTypedArray` as a `TypedArray`
```
const fa1: TypedArray = new Float32Array(10);
const roFA: ReadonlyTypedArray = fa1; // OK: `ReadonlyTypedArray` is a sub-type of `TypedArray`
const fa2: TypedArray = roFA; // `ReadonlyTypedArray` cannot be assigned to `TypedArray`
```
