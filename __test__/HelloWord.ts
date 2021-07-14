
function say(word: string) {
    console.log(word)
}

say('Hello World')

interface Person {
    name: string;
    say(this: Person): void;
}

const person: Person = {
    name: 'captain',
    say() {
        console.log(this.name)
    }
}

person.say()

class Container {
    private val: number;

    constructor(val: number) {
        this.val = val;
    }
    map(cb: (x: number) => number): this {
        this.val = cb(this.val);
        return this;
    }
    log(): this {
        console.log(this.val);
        return this;
    }
}

const instance = new Container(1)

instance
    .map((x) => x + 1)
    .log() // => 2
    .map((x) => x * 3)
    .log(); // => 6
