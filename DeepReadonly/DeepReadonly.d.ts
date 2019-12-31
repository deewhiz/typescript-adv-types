/**
 *An object that looks like a `T`, but every property, and every properties' properties, etc. are readonly.
 */
export type DeepReadonly<T> = {
    readonly [P in keyof T]:
        T[P] extends Promise<infer R> ? Promise<DeepReadonly<R>> :
        T[P] extends Set<infer U> | ReadonlySet<infer U> ? ReadonlySet<DeepReadonly<U>> :
        T[P] extends Map<infer K, infer V> | ReadonlyMap<infer K, infer V> ? ReadonlyMap<K, DeepReadonly<V>> :
        T[P] extends Array<infer U> | ReadonlyArray<infer U> ? ReadonlyArray<DeepReadonly<U>> :
        T[P] extends {} ? DeepReadonly<T[P]> :
        T[P];
}
