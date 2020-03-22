function Child() {
    this.name = 'child';
    Parent.call(this)
}
Child.prototype.say = function() { console.log(this.name) };

function Parent() {
    this.username = 'daocao';
}
Parent.prototype.sayUser = function() { console.log(this.username) };

Object.setPrototypeOf(Child.prototype, Parent.prototype);

const Obj = new Child();


Obj.sayUser();
Obj.say();

function Child1() {
    this.name = 'child';
    Parent.call(this)
}

function Parent1() {
    this.username = 'daocao';
}
Parent1.prototype.sayUser = function() { console.log(this.username) };
Child1.prototype = Object.create(Parent1.prototype, {constructor: {value: Child1}});
Child1.prototype.say = function() { console.log(this.name) };

const Obj1 = new Child1();
Obj1.sayUser();
Obj1.say();
console.log(Obj1.constructor)
