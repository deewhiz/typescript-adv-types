/**
 * A homogenous collection of `string`-`V?` key-value pairs.
 */
export type Dict<V = unknown> = {
    [key: string]: V | undefined;
}
