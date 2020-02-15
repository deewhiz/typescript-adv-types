/**
 * An object that looks like a `T`, but every property, and every properties' properties, etc. are readonly.
 */
export type DeepReadonly<T> =
    T extends Promise<infer R> ? Promise<DeepReadonly<R>> :
    T extends Set<infer U>  ? ReadonlySet<DeepReadonly<U>> :
    T extends ReadonlySet<infer U> ? ReadonlySet<DeepReadonly<U>> :
    T extends WeakSet<infer U> ? WeakSet<DeepReadonly<U>> | ReadonlySet<DeepReadonly<U>> :
    T extends Map<infer K, infer V> ? ReadonlyMap<K, DeepReadonly<V>> :
    T extends ReadonlyMap<infer K, infer V> ? ReadonlyMap<K, DeepReadonly<V>> :
    T extends WeakMap<infer K, infer V> ? WeakMap<K, DeepReadonly<V>> | ReadonlyMap<K, DeepReadonly<V>> :
    T extends Array<infer U> | ReadonlyArray<infer U> ? ReadonlyArray<DeepReadonly<U>> :
    T extends {} ? { readonly [P in keyof T]: DeepReadonly<T[P]> } :
    T;
