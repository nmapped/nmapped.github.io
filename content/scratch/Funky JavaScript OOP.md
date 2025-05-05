---
created: ""
confidence level: 
review count: 0
---
## Intro
This is here even though I have the bare minimum knowledge when it comes to OOP. I know the meaning of the concepts relevant to OOP and that's it. I'm not particularly good at programming as of writing.

I've noticed that OOP in JavaScript is a bit botched. It seems like this wasn't part of the original plans for the language and was just slapped on later down the line, as with many other features of modern JS.

## Object Constructors
Let's start with object constructors. The issue with these is that they don't act like traditional constructors in OOP.  Take this piece of code for example:

```javascript
function User(name) {
	this.name = name;
}

me = new User("steve");
```

If the `User` constructor is called without the `new` keyword, JavaScript does not return an error, instead it either binds the `this` keyword to the global object or `undefined` in strict mode, which can be a source of bugs in your program.

Using object constructors also makes inheritance really cumbersome to deal with. Let's look at another example:

```javascript
function Animal(name) {
	this.name = name;
}

Animal.prototype.speak = function() { // 1
	console.log(`${this.name} makes a noise.`);
}

function Dog(name) {
	Animal.call(this.name); // 2
}

Dog.prototype = Object.create(Animal.prototype); // 3
Dog.prototype.constructor = Dog;

const dog = new Dog("Rex");
dog.speak();
```

There are a number of things to address here. Firstly, notice that we are adding the `speak` method to the prototype explicitly. Why? If we defined the method in the constructor, each instance of `Animal` has a copy of the method rather than a single shared method. This is poor use of memory, and making changes to the method at future points in the code becomes difficult because the change doesn't reflect on already defined objects (as they merely have copies of the method). Defining the function on the prototype fixes this.

Also, `Animal.call()` is used to call the `Animal` constructor in the context of the `Dog` instance, initializing the properties from `Animal` so that each `Dog` instance has its own properties initialized from `Animal` rather than sharing them. This is done so that `Dog` can inherit properties from `Animal`. `Dog.prototype` is also made to inherit the properties and methods `Animal.prototype` so that it inherits methods from it. It's quite an unintuitive way of going about inheritance, I know. Notice how `Object.create()` is used. This is because objects are stored as references in JavaScript and in this situation we need a new object that would inherit from `Animal.prototype`. If we had done `Dog.prototype = Animal.prototype`, both `Dog` and `Animal` would have the same prototype. This means that any change carried out on `Dog.prototype` would affect `Animal.prototype` and we definitely don't want that. The `class` syntax is pretty much just syntactic sugar to abstract away these implementation details so that OOP feels more like how it does in other languages.

## Further Reading
- [[Object-Oriented Programming]]
