/**
 * @description
 * Whether or not a match for a value has been executed yet
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 */
export enum MatchState {
    Matched,
    Unmatched,
}

/**
 * @description
 * Wrapper type for an item that has already matched
 *
 * Used by matchbook to keep track of matching internally,
 * you shouldn't need to reference this type directly.
 */
export type Matched<T> = T & { __matchstate?: MatchState.Matched };

/**
 * @description
 * Wrapper type for an item that has NOT already matched
 *
 * Used by matchbook to keep track of matching internally,
 * you shouldn't need to reference this type directly.
 */
export type Unmatched<T> = T & { __matchstate?: MatchState.Unmatched };
