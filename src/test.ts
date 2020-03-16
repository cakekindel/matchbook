import * as match from './';

enum MatchMe {
    Zero,
    One,
    Two,
}

const out = match.strike<MatchMe, string>(
    MatchMe.One,
    match.when(MatchMe.Zero, 'fart'),
    match.when(MatchMe.One, 'poop'),
    match.when(MatchMe.Two, 'pee'),
    match.unwrap()
);
