# Ctor\<T, A\>
A generic constructor type that can construct objects using `new`.

-----

## Creation
Create a `Ctor`
```
class Foo {
    doFoo() { }
}

const fooCtor: Ctor<Foo> = Foo;
```

Create a `Ctor` that requires constructor arguments
```
class Bar {
    constructor(val: number, msg: string) {}
    get value() { return this.val; }
}
const barCtor: Ctor<Bar, [number, string]> = Bar;
```

Create a `Ctor` that constructs an object but returns an interface
```
interface IBar {
    value: number;
}

const iBarCtor: Ctor<IBar, [number, string]> = Bar;
```

## Constructing objects
With no arguments (and no variadic generics)
```
// set up `Ctor`
const fooCtor: Ctor<Foo> = Foo;

// construct `Foo` using `Ctor`
const foo: Foo = new fooCtor();
```

With arguments (to match the variadic generics)
```
// set up `Ctor`
const iBarCtor: Ctor<IBar, [number, string]> = Bar;

// construct `IBar` using `Ctor`
const bar: IBar = new iBarCtor(17, 'Hello, World!');
```

-----

## Errors
1. Assigning a constructor that produces a different type of object
```
const ctor<Bar, [number, string]> = Foo; // `Foo` is not a `Bar`
```

2. Not specifying the right argument types in the generic's tuple
```
const ctor<Bar, [number]> = Bar; // `Bar` requires a `number` and `string` argument
```

3. Calling `new` with mismatched argument compared to the generic type's
```
const iBarCtor: Ctor<IBar, [number, string]> = Bar;

const bar: IBar = new iBarCtor(17); // `number, string` expected, not just `number`
```
