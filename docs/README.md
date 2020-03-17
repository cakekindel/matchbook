# `matchbook` - Pattern Matching in TypeScript & JavaScript
### Why `matchbook`:
- **_zero_** dependencies
- reliable [100% code coverage]
  - (_note: there's no code yet!_)
- simple
- smart

---

### What is Pattern Matching?
Pattern matching is a  modern language feature
that acts like a `switch` / `case` statement
on steroids 💊💪.

You can transform, or act on, a value that could
be one of multiple types or states.

### How do I use this?

The `strike` function is your general-purpose
match executor. `strike` takes a value, and
tests a set of `match`es for the first successful
match.

```ts
import { match, strike, otherwise } from 'matchbook';

enum Coin {
  Quarter,
  Dime,
  Nickel,
}

// These 2 functions return the same output
//   for a given Coin.

function getValueMatchbook(coin: Coin): number {
  return strike(coin,
    match(Coin.Nickel,  0.05),
    match(Coin.Quarter, 0.25),
    match(Coin.Dime,    0.10),
    otherwise(0),
  );
}

function getValueSwitch(coin: Coin): number {
  switch (coin) {
    case Coin.Nickel:
      return 0.05;
    case Coin.Quarter:
      return 0.25;
    case Coin.Dime:
      return 0.10;
    default:
      return 0;
  }
}

assertEq(getValueMatchbook(0), getValueSwitch(0));
assertEq(getValueMatchbook(Coin.Dime), getValueSwitch(Coin.Dime));
assertEq(getValueMatchbook(Coin.Nickel), getValueSwitch(Coin.Nickel));
assertEq(getValueMatchbook(Coin.Quarter), getValueSwitch(Coin.Quarter));
```

The `strike` function supports many different type-safe ways
of matching on values, giving you a lot of versatility
in one function.

For example, if you want to get a message that describes
some DOM event, it's super clean with `matchbook`!

```ts
import {
  strike,
  m, // shorthand for match
  _, // shorthand for otherwise
} from 'matchbook';

enum MouseButton {
  Left = 0,
  Middle = 1,
  Right = 2,
}

function getEventType(e: Event): string {
  return strike(e,
    m(KeyboardEvent, "keyboard event!"),
    m(MouseEvent,    mouseEvent => strike(mouseEvent.button,
                       m(MouseButton.Left,   'left click!'),
                       m(MouseButton.Middle, 'middle click!'),
                       m(MouseButton.Right,  'right click!'),
                       _("wow, i didn't know mice could do that!")
                     )
    ),
    _(e => e.constructor.name + ' is totally new to me!'),
  );
}

const click = new MouseEvent(
  'right_click',
  { button: MouseButton.Right },
);

assertEq(getEventType(click), 'right click!');
```

### API
Coming soon - `typedoc`
