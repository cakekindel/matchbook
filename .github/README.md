# `matchbook`
#### Pattern Matching in Typescript, with **_zero_** boilerplate & **_zero_** dependencies.

---

### Usage



### What is Pattern Matching?
Pattern matching is an feature of many modern languages that lets you
succinctly act on a value that may be one of many different types or states.

<details>
<summary>
### What Problems does `matchbook` solve?
For a very simple example, let's suppose you wanted to have a function
that accepts an `Animal` and returns what kind of noise that animal makes.
</summary>

<details>
<summary>
A naive implementation in `rust`, a language with
a native pattern matching operator
</summary>

```rust
enum Animal {
    Dog,
    Cat,
    Turtle,
}

fn get_noise(animal: Animal) -> &str {
    match animal {
        Animal::Dog => "woof woof!",
        Animal::Cat => "meow!",
        _ => "...",
    }
}

pub fn main() {
    get_noise(Animal::Dog); // -> "woof woof!"
    get_noise(Animal::Cat); // -> "meow!"
    get_noise(Animal::Turtle); // -> "..."
}
```
</details>

<details>
<summary>
The same example in `typescript` using switch / case statements
</summary>

```typescript
enum Animal {
    Dog,
    Cat,
    Turtle,
}

function getNoise(animal: Animal): string {
    switch (animal) {
        case Animal.Dog:
            return 'woof, woof!';
        case Animal.Cat:
            return 'meow!';
        default:
            return '...';
    }
}

export function main(): void {
    getNoise(Animal.Dog); // -> "woof, woof!"
    getNoise(Animal.Cat); // -> "meow!"
    getNoise(Animal.Turtle); // -> "..."
}
```
</details>

> But that's not much worse! At worst, our formatter will make us
separate our `test` from our `action` onto 2 separate lines.

What if we wanted to store information about each animal
in different types?

<details>
<summary>
This example is getting bloated!
</summary>

```typescript
enum DogBreed { Beagle, GermanShepherd, /* lots more */ }
enum CatFood { Wet, Dry }
enum AnimalType { Cat, Dog, Turtle }

interface Animal {
    animalType: AnimalType;
}

interface Dog extends Animal {
    animalType: AnimalType.Dog;
    breed: DogBreed;
}

interface Cat extends Animal {
    animalType: AnimalType.Cat;
    prefersFood: CatFood;
}

function getNoise(animal: Animal) {
    if (animal.animalType === AnimalType.Dog) {
        return 'woof woof!';
    } else if (animal.animalType === AnimalType.Cat) {
        return 'meow!';
    } else {
        return '...';
    }
}
```
</details>

Let's say we just got some new requirements, too. Our `getNoise` function needs to:
- `'bark'` if `animal` is a `Dog` of `breed` `DogBreed#GermanShepherd`
- `'woof'` if `animal` is a `Dog` of `breed` `DogBreed#Beagle`

Supposing our `getNoise` function is still relevant, what happens to its implementation?

<details>
<summary>
even worse!
</summary>

```typescript
// ...

function getNoise(animal: Animal) {
    if (animal.animalType === AnimalType.Dog) {
        if (animal.breed === DogBreed.GermanShepherd) {
            return 'bark!';
        } else if (animal.breed === DogBreed.Beagle) {
            return 'woof!';
        } else {
            return 'woof woof!';
        }
    } else if (animal.animalType === AnimalType.Cat) {
        return 'meow!';
    } else {
        return '...';
    }
}

// ...
```
</details>

This function is pretty bloated, but
we can manage it if we refactor it like so:

```typescript
// is this return type syntax new to you?
// if so, check out this link:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
function animalIsDog(animal: Animal): animal is Dog;
function animalIsCat(animal: Animal): animal is Cat;

function getDogNoise(dog: Dog): string {
    if (dog.breed === DogBreed.GermanShepherd) {
        return 'bark!';
    } else if (dog.breed === DogBreed.Beagle) {
        return 'woof!';
    } else {
        return 'woof woof!';
    }
}

function getNoise(animal: Animal) {
    if (animalIsDog(animal)) {
        return getDogNoise(animal);
    } else if (animalIsCat(animal)) {
        return 'meow!';
    } else {
        return '...';
    }
}
```

This is better! Although that very succinct rust `match` operator
would be really nice. This is where `matchbook` comes in!

```typescript
import match from 'matchbook';
import { Dog, DogBreed } from './models';
import { animalIsDog, animalIsCat, dogIsBreed } from './type-guards';

function getDogNoise(dog: Dog): string {
    // example of partially applying match
    const book = match.book([
        [d => dogIsBreed(d, DogBreed.GermanShepherd), 'bark!'],
        [d => dogIsBreed(d, DogBreed.Beagle), 'woof!'],
        [match.default, 'woof!'],
    ]);

    return match.for(dog).strike(book);
}

function getNoise(animal: Animal) {
    return match.strike(animal, [
        [animalIsDog, getDogNoise],
        [animalIsCat, 'meow!'],
        [match.default, '...'],
    ]);
}
```
</details>
