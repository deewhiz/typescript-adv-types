# DeepPartial\<T\>
An object that looks like a `T`, but every property, and every properties' properties, etc. are optional.

-----

## Creation
Create a `DeepPartial` directly
```
interface IFoo {
    f: () => void;
    a: number[];
    o: {
        n: number;
        s: string;
    };
}

const partialFoo: DeepPartial<IFoo> = { /* ... */ }
```

Create a `DeepPartial` from an existing object
```
const foo: IFoo = { /* ... */ };
const partialFoo: DeepPartial<IFoo> = foo;
```

## Access values
With optional chaining (Typescript 3.7+)
```
const n: number | undefined = partialFoo.o?.n;
```

Without optional chaining
```
let n: number | undefined;
if (partialFoo.o) {
    n = partialFoo.o.n;
}
```

-----

## Errors
1. Creating a `DeepPartial` that doesn't match the provided interface
```
interface Nested {
    inner: {
        n: number;
    };
}
const deepNumber: DeepPartial<Nested> = {
    inner: {
        s: 'string', // `s` is not declared in the `Nested.inner` interface
    },
};
```

2. Adding a property that isn't in the provided interface
```
const deepNumber: DeepPartial<Nested> = {};
deepNumber.otherObject = {}; // `otherObject` is not declared in the `Nested` interface
```

3. Reading values without checking existance at each step
```
const deepNumber: DeepPartial<Nested> = {};
const n = deepNumber.inner.n; // `inner` is possibly `undefined`
```
