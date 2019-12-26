/**
 * A homogenous collection of `number`-`V?` key-value pairs.
 */
export type Indexable<V = unknown> = {
    [key: number]: V | undefined;
}
