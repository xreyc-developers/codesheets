///////////////FUNCTIONS////////////////
//ES5
function greetings(name) {
    return 'hello' + name;
}
//ES6

const greetings = (name) => {
    return `hello ${name}`;
}

const greetings = name => `hello ${name}`;


///////////////OBJECTS////////////////
//ES5
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4 }
var obj3 = Object.assign(obj1, obj2)

//ES6
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4 }
const obj3 = { ...obj1, ...obj2 }

//DESCTRUCTURING OBJECT
//ES5
var obj1 = { a: 1, b: 2, c: 3, d: 4 }

var a = obj1.a;
var b = obj1.b;
var c = obj1.c;
var d = obj1.d;

//ES6
const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const { a, b, c, d } = obj1;

//DEFINING OBJECTS
var a = 1
var b = 2
var c = 3
var d = 4

//ES5
var obj1 = { a: a, b: b, c: c, d: d }

//ES6
var obj1 = { a, b, c, d }


///////////////PROMISE AND CALLBACKS////////////////
//ES5
function isGreater(a, b, cb) {
    var greater = false
    if (a > b) {
        greater = true
    }
    cb(greater)
}

isGreater(1, 2, function (result) {
    if (result) {
        console.log('greater');
    }
    else {
        console.log('smaller');
    }
})

//ES6
cont isGreater = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve(true)
        }
        else {
            reject(false)
        }
    })
}

isGreater(1, 2)
    .then(result => {
        console.log('greater')
    })
    .catch(reult => {
        console.log('smaller');
    });

///////////////EXPORT AND IMPORT MODULES////////////////
//EXPORTING
//ES5
var myModule = {
    x: 1, y: function () {
        console.log('This is ES5');
    }
}

module.exports = myModule;

//ES6
const myModule = {
    x: 1, y: () => {
        console.log('This is ES6');
    }
}

export default myModule;

//IMPORTING
//ES5
var myModule = require('./myModule');

//ES6
import myModule from './myModule';




///////////////EXPORT AND IMPORT CHILD////////////////
//ES6
export const x = 1;
export const y = 2;
export const z = 3;

import { a, b, c } from '.myModule';


