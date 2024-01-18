// STEP 1
function Cat() {
    this.name = 'Oden'
    }
    const myCat = new Cat()
    console.log(myCat.name)



let dog = new class {
    constructor(name,breed) {
        this.name = name
        this.breed = breed
    }
    info() { 
        console.log(` ${this.name} is a ${this.breed} `)
    }('Plato','Black Lab');

dog.info();

    
// STEP 2
const cat = new Cat()
const dog = new dog.info()
// STEP 3
function Animal(name) {
    this.name = name;
 }
 
 // Example method on the Animal object
 class Animal {
	constructor(type) {
		this.type = type
	}
	addAnimal = function() {console.log(`The ${this.type} has been created`)}
	static eat = function() {console.log('Now it\'s eating!')}
}
const animal = new Animal('Dog')
animal.addAnimal()
//nixon.AddAnimal()
//Cat.eat()


// STEP 4
function Animal(type) {
	this.type = type
	this.animal = function() {
		console.log(`The  ${this.type} has been created`)
	}
}
const plato = new Animal('Dog')
plato.animal()



// STEP 5
function Animal(type, breed, color, height, length) {
	this.type = type
    this.breed = breed
	this.color = color
    this.height = height
    this.color = length
}
const plato = new Animal('Dog','Black Lab','Black','3','4')
console.log(`The ${plato.type} is a ${plato.color} ${plato.breed} `)

// STEP 6
function Animal(type, breed, color, height, length) {
	this.type = type
    this.breed = breed
	this.color = color
    this.height = height
    this.color = length
}
const plato = new Animal('Dog','Black Lab','Black','3','4')

for (var key in plato) {
  console.log(key);
}
// STEP 7
function Animal(type,color) {
	this.type = type
    this.color = color
	this.animal = function() {
        if (this.type = 'Dog') {
            console.log(`The  ${this.color} ${this.type} is barking!`)
        } else {
            if (this.type = 'Cat') {
                console.log(`The  ${this.color} ${this.type} is meowing!`)
            } else {
                console.log(`The  ${this.color} ${this.type} is doing nothing`)
            }
        }
	}
}
const plato = new Animal('Dog','black')
plato.animal()
// STEP 8
function Animal(type,color) {
	this.type = type
    this.color = color
	this.animal = function() {
        if (this.type = 'Dog') {
            console.log(`The  ${this.color} ${this.type} is barking!`)
        } else {
            if (this.type = 'Cat') {
                console.log(`The  ${this.color} ${this.type} is meowing!`)
            } else {
                console.log(`The  ${this.color} ${this.type} is doing nothing`)
            }
        }
	}
}
const plato = new Animal('Dog','black')
plato.animal()

// STEP 9
function findWords(text,word){
    if (text.indexOf(word) > -1) {
      return true;
    } else {
      return false;
    }
    }
    
    if (findWords('this is a test of finding a test word in a test text','test')) {
        console.log('word found')
    } else {
        console.log('word not found')
    }