import { Matcher, MatchResult, Problem } from '../types';
import { strike } from './strike';

type _ = unknown;

/**
 * @description
 * Use this function when you want to define
 * a pattern to be used against one or
 * more values _after_ defining the pattern.
 *
 * {@link pattern} accepts n parameters
 * of Matchers, and returns a function.
 *
 * The returned function accepts a `TIn`
 * and tests it against all of the
 * matchers passed to {@link pattern}.
 *
 * @see {@link strike}
 * @example
 *   enum Coin {
 *       Quarter,
 *       Nickel,
 *   }
 *
 *   // example from `strike`, but shortened using `pattern`.
 *   const getValue: (coin: Coin) => number = pattern(
 *       match(Coin.Quarter, 0.25),
 *       match(Coin.Nickel, 0.05),
 *       otherwise(0)
 *   );
 *
 *   assertEq(getValue(Coin.Quarter), 0.25);
 *   assertEq(getValue(Coin.Nickel), 0.05);
 */
export declare function pattern<TIn, TMatchers extends Array<Matcher<TIn, _>>>(
    ...matchers: TMatchers
): TMatchers extends Array<infer TMatcher>
    ? (val: TIn) => MatchResult<TIn, TMatcher>
    : Problem<TMatchers, 'Is not an array'>;
