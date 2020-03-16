import { IsMatch } from './is-match';
import { StrikeAlways, StrikeIfMatch } from './strike-match';
import { ThenMapWith } from './then-map-with';

/**
 * @description
 *
 */
export type MatchbookLiteral<T, R> = Array<StrikeIfMatch<T, unknown>>;

/**
 * @description
 *
 */
export type MatchbookLiteralExhaustive<T, R> = Array<
    StrikeIfMatch<T, unknown> | StrikeAlways<T, unknown>
>;
