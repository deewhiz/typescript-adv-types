# Indexable\<V\>
A homogeneous collection of `number`-`V?` key-value pairs that has the following properties:
- Only numbers can be used to index into the collection.
- It is unknown whether a key-value pair exists in the collection so a `V?` is always returned.

-----

## Creation
Create a `Indexable<string>`
```
const indexable: Indexable<string> = {
    0: 'zero',
    17: 'seventeen',
    70: 'seventy',
};
```

## Access values
```
// using bracket syntax...
const seventeen: string | undefined = indexable[17];

// ...or using brackets with a variable
const seventyKey = 70;
const seventy = indexable[seventyKey];
```

## Add / Update values
```
indexable[4] = 'five;
```

-----

## Errors
1. Adding a value that isn't of type `V`
```
const indexable: Indexable<string> = {};
indexable[7] = 7; // 7 is not a valid `string` value
```

2. Using a non-number as a key
```
const indexable: Indexable<string> = {};
const seven = indexable['7']; // '7' is not a valid key
```
