import { filter, identity, map, noop, pick, omit} from 'lodash-compat';

const method1 = identity || noop;
const method2 = noop ? map : filter;

(something ? pick : omit)(obj, () => {});
