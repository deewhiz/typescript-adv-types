# DeepRequired\<T\>
An object that looks like a `T`, but every property, and every properties' properties, etc. can not be `undefined`.

-----

## Creation
Create a `DeepRequired` directly
```
interface IFoo {
    f?: null | () => void;
    a?: number[];
    o?: {
        n?: number;
        s?: string | null;
    } | null;
}

const requiredFoo: DeepRequired<IFoo> = { /* ... */ }
```

Create a `DeepRequired` from an existing object
```
const foo: IFoo = { /* ... */ };
const requiredFoo: DeepRequired<IFoo> = foo;
```

## Access values
Accessing values stll requires checking for null values

With optional chaining (Typescript 3.7+)
```
const n: number = requiredFoo.o?.n;
```

Without optional chaining
```
let n: number;
if (requiredFoo.o) {
    n = requiredFoo.o.n;
}
```

-----

## Errors
1. Creating a `DeepRequired` that doesn't match the provided interface
```
interface Nested {
    inner: {
        n: number;
    };
}
const deepNumber: DeepRequired<Nested> = {
    inner: {
        s: 'string', // `s` is not declared in the `Nested.inner interface
    },
};
```

2. Adding a property that isn't in the provided interface
```
const deepNumber: DeepRequired<Nested> = {  /* ... */ };
deepNumber.otherObject = {}; // `otherObject` is not declared in the `Nested` interface
```

3. Setting a propert to `undefined`
```
const deepNumber: DeepRequired<Nested> = {  /* ... */ };
deepNumber.inner.n = undefined; // `undefined` is not assignable to type `number`
```
