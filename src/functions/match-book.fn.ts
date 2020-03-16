import {
    MatchbookLiteral,
    MatchbookLiteralExhaustive,
} from '../models/match-book';

/**
 * @description
 *
 */
export declare function matchBook<T, R>(
    ...matchers: MatchbookLiteral<T, R>
): (val: T) => T | R;
export declare function matchBook<T, R>(
    ...matchers: MatchbookLiteralExhaustive<T, R>
): (val: T) => R;
