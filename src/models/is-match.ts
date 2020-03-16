/**
 * @description
 * Test if a value is a match.
 *
 * See docs for {@link matchWhen}
 */
export type IsMatch<T> =
    | boolean
    | Predicate<T>
    | EqualsValue<T>
    | EqualsLazyValue<T>;

/**
 * @description Identity Type - just means 'T'
 */
type EqualsValue<T> = T;

/**
 * @description An argumentless function that returns a T
 */
type EqualsLazyValue<T> = () => T;

/**
 * @description
 * A function that performs some test on T that returns true/false.
 */
type Predicate<T> = (val: T) => boolean;
