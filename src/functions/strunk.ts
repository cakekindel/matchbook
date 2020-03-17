import { Matcher, MatchResult, Problem } from '../types';

type _ = unknown;

/**
 * TODO
 */
export declare function strunk<TIn, TArgs extends Array<Matcher<TIn, _>>>(
    ...matchers: TArgs
): TArgs extends Array<infer TMatcher>
    ? (val: TIn) => MatchResult<TIn, TMatcher>
    : Problem<TArgs, 'Is not an array'>;
