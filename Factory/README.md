# IFactory\<T\> and Factory\<T, A\>
A generic factory to construct objects of type `T`

-----

## Creation
```
interface IFoo {
    doFoo(): void;
}

class Foo implements IFoo {
    constructor(val: number, msg: string) {}
    doFoo() {}
}

const fooFactory: IFactory<IFoo> = new Factory<IFoo, [number, string]>(Foo, 71, 'Hello, World');
```

## Constructing objects
```
const foo: IFoo = fooFactory.create();
```

-----

## Errors
1. Not providing a matching `Ctor`
```
class Bar {}
interface IFoo {
    doFoo(): void;
}

const fooFactory = new Factory<IFoo>(Bar); // `Bar` is not an `IFoo`
```

2. Not providing all arguments for construction
```
class Baz {
    constructor(msg: string, msg2: string) {}
}

const bazFactory = new Factory(Baz, 'Hello'); // `Factory` instantiate with `[string]` arguments, `Baz` expects `[string, string]`
```
