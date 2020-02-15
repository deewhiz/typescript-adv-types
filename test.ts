import { DeepReadonly } from './DeepReadonly/DeepReadonly';
import { DeepPartial } from './DeepPartial/DeepPartial';
import { DeepNonNullable } from './DeepNonNullable/DeepNonNullable';
import { DeepRequired } from './DeepRequired/DeepRequired';

interface Foo {
    p1: number;
    p2: string;
    p3: {
        pp1: boolean;
        pp2: string;
        pp3: {
            ppp1: {};
            ppp2: string;
        }
    }
}

const foo: DeepReadonly<Foo> = {
    p1: 1,
    p2: '',
    p3: {
        pp1: false,
        pp2: '',
        pp3: {
            ppp1: {},
            ppp2: '',
        }
    }
}

foo.p1 = 1;
foo.p2 = '';
foo.p3 = {};
foo.p3.pp1 = true;
foo.p3.pp2 = '';
foo.p3.pp3 = {};
foo.p3.pp3.ppp1 = {};
foo.p3.pp3.ppp2 = '';

const foo2: DeepPartial<Foo> = {
    p1: 1,
    p2: '',
    p3: {
        pp1: false,
        pp2: '',
        pp3: {
            ppp1: {},
            ppp2: '',
        }
    }
};

foo2.p1 = 1;
foo2.p2 = '';
// foo2.p3 = {};
foo2.p3.pp1 = true;
foo2.p3.pp2 = '';
// foo2.p3.pp3 = {};
foo2.p3.pp3.ppp1 = {};
foo2.p3.pp3.ppp2 = '';

const foo3: DeepNonNullable<{
    p1?: number | null;
    p2: string| null;
    p3: {
        pp1: boolean| null;
        pp2: string| null;
        pp3?: {
            ppp1: {}| null;
            ppp2: string| null;
        }| null
    }| null
}| null> = {
    p1: 1,
    p2: '',
    p3: {
        pp1: false,
        pp2: '',
        pp3: {
            ppp1: {},
            ppp2: '',
        },
    },
};

foo3.p1 = undefined;
foo3.p2 = null;
foo3.p3 = null;
foo3.p3.pp1 = null;
foo3.p3.pp2 = null;
foo3.p3.pp3 = null;
foo3.p3.pp3.ppp1 = null;
foo3.p3.pp3.ppp2 = null;

const foo4: DeepRequired<{
    p1?: number | undefined;
    p2?: string;
    p3?: {
        pp1?: boolean;
        pp2?: string;
        pp3?: {
            ppp1?: {};
            ppp2?: string;
        };
    };
}> = {
    p1: 1,
    p2: '',
    p3: {
        pp1: false,
        pp2: '',
        pp3: {
            ppp1: {},
            ppp2: '',
        }
    }
};

foo4.p1 = undefined;
foo4.p2 = undefined;
// foo4.p3 = undefined;
foo4.p3.pp1 = undefined;
foo4.p3.pp2 = undefined;
// foo4.p3.pp3 = undefined;
foo4.p3.pp3.ppp1 = undefined;
foo4.p3.pp3.ppp2 = undefined;
