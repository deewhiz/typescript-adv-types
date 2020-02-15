/**
 * An object that looks like a `T`, but every property, and every properties' properties, etc. are not optional.
 * Opposite of `DeepPartial<T>`
 */
export type DeepRequired<T> =
    T extends Promise<infer R> ? Promise<DeepRequired<R>> :
    T extends Set<infer U> ? Set<DeepRequired<U>> :
    T extends ReadonlySet<infer U> ? ReadonlySet<DeepRequired<U>> :
    T extends WeakSet<infer U> ? WeakSet<DeepRequired<U>> :
    T extends Map<infer K, infer V> ? Map<K, DeepRequired<V>> :
    T extends ReadonlyMap<infer K, infer V> ? ReadonlyMap<K, V> :
    T extends WeakMap<infer K, infer V> ? WeakMap<K, DeepRequired<V>> :
    T extends Array<infer U> ? Array<DeepRequired<U>> :
    T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepRequired<U>> :
    T extends {} ? { [P in keyof T]-?: DeepRequired<T[P]> } :
    T;
