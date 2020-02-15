# DeepNonNullable\<T\>
An object that looks like a `T`, but every property, and every properties' properties, etc. can not be `null` or `undefined`.

-----

## Creation
Create a `DeepNonNullable` directly
```
interface IFoo {
    f: null | () => void;
    a: number[] | null;
    o?: {
        n: number | null;
        s?: string;
    } | null;
}

const nonNullableFoo: DeepNonNullable<IFoo> = { /* ... */ }
```

Create a `DeepNonNullable` from an existing object
```
const foo: IFoo = { /* ... */ };
const nonNullableFoo: DeepNonNullable<IFoo> = foo;
```

## Access values
All properties, sub-properties, sub-sub-properties, etc can be accessed without checking for `null` or `undefined` prpoerties

```
const n: number | undefined = nonNullableFoo.o.n;
```

-----

## Errors
1. Creating a `DeepNonNullable` that doesn't match the provided interface
```
interface Nested {
    inner: {
        n: number;
    };
}
const deepNumber: DeepNonNullable<Nested> = {
    inner: {
        s: 'string', // `s` is not declared in the `Nested.inner` interface
    },
};
```

2. Adding a property that isn't in the provided interface
```
const deepNumber: DeepNonNullable<Nested> = { /* ... */ };
deepNumber.otherObject = {}; // `otherObject` is not declared in the `Nested` interface
```

3. Setting values to `null` or `undefined`
```
const deepNumber: DeepNonNullable<Nested> = { /* ... */ };
deepNumber.inner.n = null; // `null` is not assignable to type `number`
deepNumber.inner.n = undefined; // `undefined` is not assignable to type `number`
```
