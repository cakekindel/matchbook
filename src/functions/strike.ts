import { Matcher, MatchResult, Problem } from '../types';

type _ = unknown;

/**
 * TODO
 */
export declare function strike<TIn, TArgs extends Array<Matcher<TIn, _>>>(
    val: TIn,
    ...matchers: TArgs
): TArgs extends Array<infer TMatcher>
    ? MatchResult<TIn, TMatcher>
    : Problem<TArgs, 'Is not an array'>;
