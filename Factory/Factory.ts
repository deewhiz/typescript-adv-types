import { IFactory } from './IFactory';
import { Ctor } from '../Ctor/Ctor';

export class Factory<T, A extends unknown[] = []> implements IFactory<T> {
    private args: A;

    constructor(private ctor: Ctor<T, A>, ...args: A) {
        this.args = args;
    }

    create(): T {
        return new this.ctor(...this.args);
    }
}
