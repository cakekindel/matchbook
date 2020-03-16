import { IsTypeMatch, StrikeIfMatch, ThenMapWith } from '../models';

/**
 * @description
 * Executes a match if `val` {@link IsTypeMatch|satisfies a **type** match} (either a {@link https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards|Type Guard} or a {@link Ctor|Constructor}).
 *
 * This allows your {@link ThenMapWith|`then` argument} to know that the
 * matched value is a given type.
 *
 * See the examples for the different ways you can use `matchWhen`
 *
 * #####
 *
 * @example ##### Match if `human` is an instance of a constructor
 * // Get the level of Personal Protective Equipment for each career
 * class Human {}
 * class Nurse extends Human {}
 * class ConstructionWorker extends Human {}
 * class BombSquadTechnician extends Human {}
 *
 * match.strike(
 *     human,
 *     match.type(Nurse, PpeLevel.Low),
 *     match.type(ConstructionWorker, PpeLevel.Medium),
 *     match.type(BombSquadTechnician, PpeLevel.High),
 *     match._(Ppe.None),
 * );
 *
 * @example ##### Match if `emoji` satisfies a type guard
 * // for input '4', this returns: 'sqrt: 2'
 * match.book<unknown, string>(
 *     match.type(n => typeof n === 'number', n => `sqrt: ${Math.sqrt(n)}`),
 *     match._('no clue')
 * );
 *
 */
export declare function matchType<T, TSub extends T>(
    ifMatch: IsTypeMatch<T, TSub>
): <R>(then: ThenMapWith<T, R>) => StrikeIfMatch<T, R>;
export declare function matchType<T, TSub extends T, R>(
    ifMatch: IsTypeMatch<T, TSub>,
    then: ThenMapWith<T, R>
): StrikeIfMatch<T, R>;
