/**
 * @description
 * Test if a value matches a type.
 *
 * See docs for {@link matchType}
 */
export type IsTypeMatch<T, TSub extends T> =
    | Ctor<TSub>
    | ((val: T) => val is TSub);

/**
 * @description
 * A reference to a `new`-able constructor
 *
 * @example
 *   class MyClass {  }
 *   const myCtor: Ctor<MyClass> = MyClass;
 */
export interface Ctor<T> {
    new (...args: unknown[]): T;
}
