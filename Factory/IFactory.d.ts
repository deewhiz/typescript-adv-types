/**
 * A factory to construct objects of type `T`
 */
export interface IFactory<T> {
    create(): T;
}
