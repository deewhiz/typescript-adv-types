# Indexable\<V\>
A homogenous collection of `number`-`V?` key-value pairs that has the following properties:
- Only numbers can be used to index into the collection.
- It is unknown whether a key-value pair exists in the collection so a `V?` is always returned.

-----
Create a `Indexable<string>`
```
const indexable: Indexable<string> = {
    0: 'zero',
    17: 'seventeen',
    70: 'seventy',
};
```

Read a value for a key
```
// using bracket syntax...
const seventeen: string | undefined = indexable[17];

// ...or using brackets with a variable
const seventyKey = 70;
const seventy = indexable[seventyKey];
```

Add a new key-value pair
```
indexable[4] = 'four';
```

Update an existing value
```
indexable[4] = 'five;
```

Delete a key-value pair
```
delete indexable[4];
```

**The following are errors:**
1. Adding a value that isn't of type `V`
```
indexable[7] = 7;
```

2. Using a non-number as a key
```
const seven = indexable['7'];
```
