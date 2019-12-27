/**
 * An object that looks like a `T`, but every property, and every properties' properties, etc. are optional.
 */
export type DeepPartial<T> = {
    [P in keyof T]?:
        T[P] extends Function ? T[P] :
        T[P] extends Array<infer U> ? Array<DeepPartial<U>> :
        T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> :
        T[P] extends {} ? DeepPartial<T[P]> :
        T[P];
}