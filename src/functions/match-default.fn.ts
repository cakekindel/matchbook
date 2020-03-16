/**
 * @description
 * Always executes a match, using either a
 * constant value of type R or a delegate
 * that returns a value of type R
 *
 * Type signature:
 * <pre>
 * matchDefault ::  R       -> T | R -> R
 * matchDefault :: (T -> R) -> T | R -> R
 * </pre>
 *
 * @example
 *   // -- types --
 *   class Mammal {
 *       public legCount = 4;
 *   }
 *   class Human extends Mammal {
 *       public legCount = 2;
 *       public speak(): string { return 'blah'; }
 *   }
 *
 *   // -- example --
 *   let input: Mammal;
 *   let output: Mammal | string;
 *
 *   //    getNoise :: Mammal -> (Mammal | string)
 *   const getNoise = ;
 *
 *   const orDefault = matchDefault();
 *
 *   // input is a Human, so Human#speak is invoked
 *   input  = new Human();
 *   output = pipe(
 *       matchCtor(Human)(human => human.speak()),
 *       matchDefault('no noise'),
 *   )(input);
 *
 *   console.log(output === 'blah'); // true
 *
 *   // input is a Mammal, so Human#speak is not invoked
 *   input  = new Mammal();
 *   output = pipe(
 *       matchCtor(Human)(human => human.speak()),
 *       matchDefault('no noise'),
 *   )(input);
 *
 *   console.log(output === 'no noise'); // true
 */
import { StrikeAlways, ThenMapWith } from '../models';

export declare const matchDefault: <T, R>(
    useDefault: ThenMapWith<T, R>
) => StrikeAlways<T, R>;
