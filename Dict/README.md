# Dict\<V\>
A homogenous collection of `string`-`V?` key-value pairs that has the following properties:
- Only strings can be used to index into the collection.
- It is unknown whether a key-value pair exists in the collection so a `V?` is always returned.

-----
Create a `Dict<number>`
```
const dict: Dict<number> = {
    zero: 0,
    seventeen: 17,
    seventy: 70,
};
```

Read a value for a key
```
// using dot notation
const zero: number | undefined = dict.zero;

// ...or using bracket syntax...
const seventeen: number | undefined = dict['seventeen'];

// ...or using brackets with a variable
const seventyKey = 'seventy';
const seventy = dict[seventyKey];
```

Add a new key-value pair
```
dict.four = 4;
```

Update an existing value
```
dict.four = 5;
```

Delete a key-value pair
```
delete dict.four;
```

**The following are errors:**
1. Adding a value that isn't of type `V`
```
dict.seven = 'seven';
```

2. Using a non-string as a key
```
const seven = dict[7];
```
