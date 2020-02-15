# Typeof\<T\>
The type of `T`'s constructor based on its prototype.
In Typescript, this acts like Javascript's `instanceof` (due to Typescript structural typing)

-----

## Creation
Create a `Typeof`
```
class Foo {
    doFoo() {}
}

const fooType: Typeof<Foo> = Foo;
```

Create a `Typeof` of a sub-type
```
class Bar extends Foo {
    doBar() {}
}

// assign a sub-type (Bar) to a `Typeof` super-type
const fooType<Foo> = Bar;
```

-----

## Errors
1. Assigning an instance as a `Typeof`
```
const fooType<Foo> = new Foo(); // an instance of `Foo` does not have a prototype of `Foo`
```

2. Assigning a sub-type (instead of a super-type)
```
cost barType<Bar> = Foo; // `Bar` is a `Foo`; `Foo` is not a `Bar`
```
