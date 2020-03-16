import { MatchbookLiteral, MatchbookLiteralExhaustive } from '../models';

export declare function matchStrike<T, R>(
    val: T,
    ...matchers: MatchbookLiteral<T, R>
): T | R;
export declare function matchStrike<T, R>(
    val: T,
    ...matchers: MatchbookLiteralExhaustive<T, R>
): R;
