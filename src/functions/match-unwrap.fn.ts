import { StrikeAlways } from '../models';

/**
 * @description
 * This throws if the match was not exhaustive,
 * and continues with an R if it was.
 *
 * I sure hope you know what you're doing!
 */
export declare function matchUnwrap<T, R>(): StrikeAlways<T, R>;
