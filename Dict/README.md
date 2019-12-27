# Dict\<V\>
A homogeneous collection of `string`-`V?` key-value pairs that has the following properties:
- Only strings can be used to index into the collection.
- It is unknown whether a key-value pair exists in the collection so a `V?` is always returned.

-----

## Creation
Create a `Dict<number>`
```
const dict: Dict<number> = {
    zero: 0,
    seventeen: 17,
    seventy: 70,
};
```

## Access values
```
// using dot notation...
const zero: number | undefined = dict.zero;

// ...or using bracket syntax...
const seventeen: number | undefined = dict['seventeen'];

// ...or using brackets with a variable
const seventyKey = 'seventy';
const seventy = dict[seventyKey];
```

## Add / Update values
```
dict.four = 5;
```

-----

## Errors
1. Adding a value that isn't of type `V`
```
const dict: Dict<number> = {};
dict.seven = 'seven'; // 'seven' is not a valid `number` value
```

2. Using a non-string as a key
```
const dict: Dict<number> = {};
const seven = dict[7]; // 7 is not a valid key
```
