/**
 *
 */
export type DeepNonNullable<T> =
    T extends Promise<infer R> ? Promise<DeepNonNullable<R>> :
    T extends Set<infer U> ? Set<DeepNonNullable<U>> :
    T extends ReadonlySet<infer U> ? ReadonlySet<DeepNonNullable<U>> :
    T extends Map<infer K, infer V> ? Map<DeepNonNullable<K>, DeepNonNullable<V>> :
    T extends ReadonlyMap<infer K, infer V> ? ReadonlyMap<DeepNonNullable<K>, DeepNonNullable<V>> :
    T extends Array<infer U> ? Array<DeepNonNullable<U>> :
    T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepNonNullable<U>> :
    T extends {} ? { [P in keyof T]-?: DeepNonNullable<T[P]> } :
    NonNullable<T>;
