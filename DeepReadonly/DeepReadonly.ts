/**
 *An object that looks like a `T`, but every property, and every properties' properties, etc. are readonly.
 */
export type DeepReadonly<T> = {
    readonly [P in keyof T]:
        T[P] extends Function ? T[P] :
        T[P] extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>> :
        T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepReadonly<U>> :
        T[P] extends {} ? DeepReadonly<T[P]> :
        T[P];
}
