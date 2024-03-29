//MWollin Music Player test
class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

// // STEP 1
// function Cat() {
//     this.name = 'Oden'
//     }
//     const myCat = new Cat()
//     console.log(myCat.name)



// let dog = new class {
//     constructor(name,breed) {
//         this.name = name
//         this.breed = breed
//     }
//     info() { 
//         console.log(` ${this.name} is a ${this.breed} `)
//     }('Plato','Black Lab');

// dog.info();

    
// // STEP 2
// const cat = new Cat()
// const dog = new dog.info()
// // STEP 3
// function Animal(name) {
//     this.name = name;
//  }
 
//  // Example method on the Animal object
//  class Animal {
// 	constructor(type) {
// 		this.type = type
// 	}
// 	addAnimal = function() {console.log(`The ${this.type} has been created`)}
// 	static eat = function() {console.log('Now it\'s eating!')}
// }
// const animal = new Animal('Dog')
// animal.addAnimal()
// //nixon.AddAnimal()
// //Cat.eat()


// // STEP 4
// function Animal(type) {
// 	this.type = type
// 	this.animal = function() {
// 		console.log(`The  ${this.type} has been created`)
// 	}
// }
// const plato = new Animal('Dog')
// plato.animal()



// // STEP 5
// function Animal(type, breed, color, height, length) {
// 	this.type = type
//     this.breed = breed
// 	this.color = color
//     this.height = height
//     this.color = length
// }
// const plato = new Animal('Dog','Black Lab','Black','3','4')
// console.log(`The ${plato.type} is a ${plato.color} ${plato.breed} `)

// // STEP 6
// function Animal(type, breed, color, height, length) {
// 	this.type = type
//     this.breed = breed
// 	this.color = color
//     this.height = height
//     this.color = length
// }
// const plato = new Animal('Dog','Black Lab','Black','3','4')

// for (var key in plato) {
//   console.log(key);
// }
// // STEP 7
// function Animal(type,color) {
// 	this.type = type
//     this.color = color
// 	this.animal = function() {
//         if (this.type = 'Dog') {
//             console.log(`The  ${this.color} ${this.type} is barking!`)
//         } else {
//             if (this.type = 'Cat') {
//                 console.log(`The  ${this.color} ${this.type} is meowing!`)
//             } else {
//                 console.log(`The  ${this.color} ${this.type} is doing nothing`)
//             }
//         }
// 	}
// }
// const plato = new Animal('Dog','black')
// plato.animal()
// // STEP 8
// function Animal(type,color) {
// 	this.type = type
//     this.color = color
// 	this.animal = function() {
//         if (this.type = 'Dog') {
//             console.log(`The  ${this.color} ${this.type} is barking!`)
//         } else {
//             if (this.type = 'Cat') {
//                 console.log(`The  ${this.color} ${this.type} is meowing!`)
//             } else {
//                 console.log(`The  ${this.color} ${this.type} is doing nothing`)
//             }
//         }
// 	}
// }
// const plato = new Animal('Dog','black')
// plato.animal()

// // STEP 9
// function findWords(text,word){
//     if (text.indexOf(word) > -1) {
//       return true;
//     } else {
//       return false;
//     }
//     }
    
//     if (findWords('this is a test of finding a test word in a test text','test')) {
//         console.log('word found')
//     } else {
//         console.log('word not found')
//     }