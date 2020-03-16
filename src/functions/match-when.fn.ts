import { IsMatch } from '../models/is-match';
import { StrikeIfMatch } from '../models/strike-match';
import { ThenMapWith } from '../models/then-map-with';

/**
 * @description
 * Executes a match if `val` {@link IsMatch|satisfies a match}
 *
 * See the examples for the different ways you can use `matchWhen`
 *
 * #####
 *
 * @example ##### {@link EqualsValue|Match if `emoji` equals a constant value}
 * // for input Emoji.Smiley, this returns: ':smiley:'
 * match.strike(
 *     emoji,
 *     match.when(Emoji.Smiley, ':smiley:'),
 * );
 *
 * @example ##### {@link EqualsLazyValue|Match if `emoji` equals the return value of a `() => string`}
 * // for input '😁', this returns: ':smiley:'
 * // for input that matches user's favorite, this returns: 'it's your favorite!'
 * match.strike(
 *     emoji,
 *     match.when(Emoji.Smiley, ':smiley:'),
 *     match.when(() => getUsersFavoriteEmoji(), `it's your favorite!`),
 *     match.default('You must not like me...')
 * );
 * </pre>
 *
 *
 * @example ##### {@link Predicate|Match if some true/false check passes }
 * // for input NaN, this returns: `that's not a number! scandalous!`
 * // for input 4, this returns: `Here's the square root for that number: 2`
 * match.strike(
 *     numberOrNot,
 *     match.when(isNaN, `that's not a number! scandalous!`),
 *     match._(val => `Here's the square root for that number: ${Math.sqrt(val)}`),
 * );
 *
 * @example ##### {@link Boolean|Match on an inline boolean expression}
 * // in debug mode, for input '🥚', this returns: `emoji: 🥚, unicode: \u1F95A`
 * // in prod mode,  for input '🥚', this returns: ':egg:'
 * match.strike(
 *     emoji,
 *     match.when(
 *         process.env['NODE_ENV'] === 'Debug',
 *         val => `emoji: ${val}, unicode: ${getUnicode(val)}`
 *     ),
 *     match._(':egg:'),
 * );
 */
export declare function matchWhen<T>(
    isMatch: IsMatch<T>
): <R>(then: ThenMapWith<T, R>) => StrikeIfMatch<T, R>;
export declare function matchWhen<T, R>(
    isMatch: IsMatch<T>,
    then: ThenMapWith<T, R>
): StrikeIfMatch<T, R>;
