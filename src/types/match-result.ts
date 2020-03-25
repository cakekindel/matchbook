import { DefaultMatcher, Matcher } from './matcher';
import { Problem } from './problem';

type _ = unknown;

/**
 * @description
 * Internal helper type that calculates
 * the return type of `pattern` and `strike`
 *
 * @access package
 */
export type MatchResult<TIn, TMatcher> = TMatcher extends Matcher<
    infer TMatcher_In,
    infer TOut
>
    ? NonExhaustiveMatchResult<TIn, TOut, TMatcher, TMatcher_In>
    : TMatcher extends
          | Matcher<infer TMatcher_In, infer TOut>
          | DefaultMatcher<infer TMatcher_In, infer TOut>
    ? ExhaustiveMatchResult<TIn, TOut, TMatcher, TMatcher_In>
    : Problem<
          TMatcher,
          'Cannot infer type of' | Matcher<_, _> | 'from arguments'
      >;

type ExhaustiveMatchResult<
    TIn,
    TOut,
    TMatcher,
    TMatcher_In
> = TMatcher_In extends [unknown]
    ? TOut
    : TIn extends TMatcher_In
    ? TOut
    : Problem<TMatcher, TMatcher_In | 'Not assignable to' | TIn>;

type NonExhaustiveMatchResult<
    TIn,
    TOut,
    TMatcher,
    TMatcher_In
> = TMatcher_In extends [unknown]
    ? TIn | TOut
    : TIn extends TMatcher_In
    ? TIn | TOut
    : Problem<TMatcher, TMatcher_In | 'Not assignable to' | TIn>;
