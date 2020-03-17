import { DefaultMatcher } from '../types';

/**
 * @description
 * This throws if the match was not exhaustive,
 * and returns R if it matched.
 *
 * I sure hope you know what you're doing!
 *
 * @example
 *  enum Time {
 *      Morning = 'Morning',
 *      Noon = 'Noon',
 *      Afternoon = 'Afternoon',
 *  }
 *
 *  const actual = strike(
 *      'Night',
 *      match(Time.Morning, 'Good morning!'),
 *      otherwise('Goodnight!')
 *  );
 *
 *  assertEq(actual, 'Goodnight!');
 */
export declare function unwrap<TIn, TOut>(): DefaultMatcher<TIn, TOut>;
