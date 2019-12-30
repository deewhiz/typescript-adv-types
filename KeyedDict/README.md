# KeyedDict\<K, V\>
A homogeneous collection of `K[keyof K]`-`V` key-value pairs with the following properties:
- A subset of values of `K` can be used as keys and have an associated value in the collection
- It is unknown whether a key-value pair exists in the collection so a `V?` is always returned.
- No other keys can be added to the collection

-----

## Creation
Create a `KeyedDict` using a tuple
```
type States = ['idle', 'loading', 'running'];
const tupleDict: KeyedDict<States, number> = {
    idle: Date.now(),
    loading: Date.now(),
}
```

Create a `KeyedDict` using an enum
```
enum State {
    IDLE,
    LOADING,
    RUNNING,
}

const enumDict: KeyedDict<typeof State, number> = {
    [State.IDLE]: Date.now(),
}
```

Create a `KeyedDict` using an object type
```
const objDict: KeyedDict<{
    0: 'idle',
    1: 'loading',
    2: 'running',
}, number> = {
    idle: Date.now(),
    loading: Date.now(),
}
```

## Access values
```
// using dot notation...
const idleTime = tupleDict.idle;

// ...or using an enum value
const loadingTime = enumDict[State.LOADING];
```

## Add / Update values
```
// using dot notation...
tupleDict.idle = Date.now();

// ...using an enum value
enumDict[State.IDLE] = Date.now();
```

-----

## Errors
1. Updating a value to something that isn't of type `V`
```
const phaseTimes: KeyedDict<['idle', 'loading', 'running'], number> = {};
phaseTimes.idle = 'now'; // 'now' is not a valid `number` value
```

2. Creating a dict with a value for a key that doesn't exist in the set of keys for the `KeyedDict` type
```
const phaseTimes: KeyedDict<['idle', 'loading', 'running'], number> = {
    waiting: Date.now(), // 'waiting' is not a valid key
};
```

3. Setting a value for a key that doesn't exist in the set of keys for the `KeyedDict` type
```
const phaseTimes: KeyedDict<['idle', 'loading', 'running'], number> = {
    /* ... */
};
phaseTimes.waiting = 5; // 'waiting' is not a valid key
```
