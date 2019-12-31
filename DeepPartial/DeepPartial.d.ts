/**
 * An object that looks like a `T`, but every property, and every properties' properties, etc. are optional.
 */
export type DeepPartial<T> = {
    [P in keyof T]?:
        T[P] extends Promise<infer R> ? Promise<DeepPartial<R>> :
        T[P] extends Set<infer U> | ReadonlySet<infer U> ? ReadonlySet<DeepPartial<U>> :
        T[P] extends Map<infer K, infer V> | ReadonlyMap<infer K, infer V> ? ReadonlyMap<K, DeepPartial<V>> :
        T[P] extends Array<infer U> | ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> :
        T[P] extends {} ? DeepPartial<T[P]> :
        T[P];
}