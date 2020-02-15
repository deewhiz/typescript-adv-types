/**
 * An object that looks like a `T`, but every property, and every properties' properties, etc. are optional.
 * Opposite of `DeepRequired<T>`
 */
export type DeepPartial<T> =
    T extends Promise<infer R> ? Promise<DeepPartial<R>> :
    T extends Set<infer U> ? Set<DeepPartial<U>> :
    T extends ReadonlySet<infer U> ? ReadonlySet<DeepPartial<U>> :
    T extends WeakSet<infer U> ? WeakSet<DeepPartial<U>> :
    T extends Map<infer K, infer V> ? Map<K, DeepPartial<V>> :
    T extends ReadonlyMap<infer K, infer V> ? ReadonlyMap<K, DeepPartial<V>> :
    T extends WeakMap<infer K, infer V> ? WeakMap<K, DeepPartial<V>> :
    T extends Array<infer U> ? Array<DeepPartial<U>> :
    T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> :
    T extends {} ? { [P in keyof T]?: DeepPartial<T[P]> } :
    T;
