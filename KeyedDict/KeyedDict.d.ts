/**
 * A homogeneous map that can use a subset of keys limited to the values of the object passed in as `K`.
 * If a tuple is used for `K`, the values of the tuple are used as keys.
 * If an object is used for `K`, the values for all keys are used as keys.
 * An enum can be used by specifying `K` using `typeof` the enum.
 */
export type KeyedMap<K, V> = K extends Array<string | number> ? {
    [key in K[Extract<keyof K, number>]]: V;
} : {
    [key in Extract<K[keyof K], number | string>]: V;
};
