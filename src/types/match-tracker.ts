/**
 * @description
 * Wrapper object used to tell if a value
 * matched against is in a Matched or
 * Unmatched state
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @access package
 */
export interface MatchTracker<TVal> {
    __matchstate: MatchState;
    val: TVal;
}

/**
 * @description
 * Whether or not a match for a value has been executed yet
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @access package
 */
export enum MatchState {
    Matched = 'Matched',
    Unmatched = 'Unmatched',
}
