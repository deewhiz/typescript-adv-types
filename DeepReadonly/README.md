# DeepReadonly\<T\>
An object that looks like a `T`, but every property, and every properties' properties, etc. are readonly.

!! **NOTE**: this does not remove mutator methods from custom objects !!

-----

## Creation
Create a `DeepReadonly` directly

```
interface IFoo {
    f: () => void;
    a: number[];
    o: {
        n: number;
        s: string;
    };
}

const readonlyFoo: DeepReadonly<IFoo> = { /* ... */ }
```

Create a `DeepReadonly` from an existing object
```
const foo: IFoo = { /* ... */ };
const readonlyFoo: DeepReadonly<IFoo> = foo;
```

## Access values
```
const o: DeepReadonly<IFoo['o']> = readonlyFoo.o;
```

-----

## Errors
1. Creating a `DeepReadonly` that doesn't match the provided interface
```
interface Nested {
    inner: {
        n: number;
    };
}
const deepNumber: DeepReadonly<Nested> = {
    inner: {
        s: 'string', // `s` is not declared in the `Nested.inner` interface
    },
};
```

2. Updating or adding a property that is (or isn't) in the provided interface
```
const deepNumber: DeepReadonly<Nested> = { /* ... */ };
deepNumber.inner = {}; // `inner` is readonly and only permits reading
```
