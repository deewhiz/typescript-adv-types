# KeyedMap\<K, V\>
A homogeneous collection of `K[keyof K]`-`V` key-value pairs with the following properties:
- All values of `K` must be used as keys and have an associated value in the collection
- No other keys can be added to the collection

-----

## Creation
Create a `KeyedMap` using a tuple
```
type dimensions = ['width', 'height', 'depth'];
const tupleMap: KeyedMap<dimensions, number> = {
    width: 3,
    height: 4,
    depth: 5,
}
```

Create a `KeyedMap` using an enum
```
enum Dimension {
    WIDTH,
    HEIGHT,
    DEPTH,
}

const enumMap: KeyedMap<typeof Dimension, number> = {
    [Dimension.WIDTH]: 3,
    [Dimension.HEIGHT]: 4,
    [Dimension.DEPTH]: 5,
}
```

Create a `KeyedMap` using an object type
```
const objMap: KeyedMap<{
    x: 'width',
    y: 'height',
    z: 'depth',
}, number> = {
    width: 3,
    height: 4,
    depth: 5,
}
```

## Access values
```
// using dot notation...
const width = tupleMap.width;

// ...using an enum value
const height = enumMap[Dimension.HEIGHT];
```

## Update values
```
// using dot notation...
tupleMap.width = 5;

// ...or using an enum value
enumMap[Dimention.DEPTH] = 4;
```

-----

## Errors
1. Updating a value to something that isn't of type `V`
```
const dimensions: KeyedMap<['width', 'height', 'depth'], number> = {
    /* ... */
};
dimensions.width = 'four'; // 'four' is not a valid `number` value
```

2. Creating a map with a value for a key that doesn't exist in the set of keys for the `KeyedMap` type
```
const dimensions: KeyedMap<['width', 'height', 'depth'], number> = {
    width: 3,
    height: 4,
    depth: 5,
    hyper: 6, // 'hyper' is not a valid key
};
```

3. Setting a value for a key that doesn't exist in the set of keys for the `KeyedMap` type
```
const dimensions: KeyedMap<['width', 'height'], number> = {
    /* ... */
};
dimensions.depth = 5; // 'depth' is not a valid key
```

4. Not specifying a value for all keys during creation
```
const dimensions: KeyedMap<['width', 'height', 'depth'], number> = {
    width: 3,
    height: 4,
    // missing depth key-value pair
};
```