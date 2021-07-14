function say(word) {
    console.log(word);
}
say('Hello World');
var person = {
    name: 'captain',
    say: function () {
        console.log(this.name);
    }
};
person.say();
var Container = /** @class */ (function () {
    function Container(val) {
        this.val = val;
    }
    Container.prototype.map = function (cb) {
        this.val = cb(this.val);
        return this;
    };
    Container.prototype.log = function () {
        console.log(this.val);
        return this;
    };
    return Container;
}());
var instance = new Container(1);
instance
    .map(function (x) { return x + 1; })
    .log() // => 2
    .map(function (x) { return x * 3; })
    .log(); // => 6
