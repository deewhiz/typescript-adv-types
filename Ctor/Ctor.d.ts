/**
 * A constructor signature for a type `T` with arguments `A`
 */
export type Ctor<T, A extends unknown[] = []> = { new(...args: A): T };
