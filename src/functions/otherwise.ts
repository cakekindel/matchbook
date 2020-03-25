import { DefaultMatcher, Transformer } from '../types';

/**
 * @description
 * Always executes a match, using either a
 * constant value of type R or a delegate
 * that returns a value of type R
 *
 * @example
 *   enum Time {
 *       Morning = 'Morning',
 *       Noon = 'Noon',
 *       Afternoon = 'Afternoon',
 *   }
 *
 *   const actual = strike(
 *       'Night',
 *       match(Time.Morning, 'Good morning!'),
 *       otherwise('Goodnight!')
 *   );
 *
 *   assertEq(actual, 'Goodnight!');
 */
export declare const otherwise: <TIn, TOut>(
    useDefault: Transformer<TIn, TOut>
) => DefaultMatcher<TIn, TOut>;
