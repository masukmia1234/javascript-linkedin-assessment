JavaScript
Q1. Which operator returns true if the two compared values are not equal?
 <>
 ~
 ==!
 !==
Reference Javascript Comparison Operators

Q2. How is a forEach statement different from a for statement?
 Only a for statement uses a callback function.
 A for statement is generic, but a forEach statement can be used only with an array.
 Only a forEach statement lets you specify your own iterator.
 A forEach statement is generic, but a for statement can be used only with an array.
Reference Differences between forEach and for loop

Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on $50?
function addTax(total) {
  return total * 1.05;
}
 addTax = 50;
 return addTax 50;
 addTax(50);
 addTax 50;
Reference functions in javascript

Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?
 let rate = 100;
 let 100 = rate;
 100 = let rate;
 rate = 100;
Reference Javascript Assignment operators

Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?
 var student = new Person();
 var student = construct Person;
 var student = Person();
 var student = construct Person();
Reference

Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?
let modal = document.querySelector('#result');
setTimeout(function () {
  modal.classList.remove('hidden');
}, 10000);
console.log('Results shown');
 after 10 second
 after results are received from the HTTP request
 after 10000 seconds
 immediately
Reference Javascript is synchronous and single threaded

Q7. Which snippet could you add to this code to print "food" to the console?
class Animal {
  static belly = [];
  eat() {
    Animal.belly.push('food');
  }
}
let a = new Animal();
a.eat();
console.log(/* Snippet Here */); //Prints food
 a.prototype.belly[0]
 Object.getPrototype0f (a).belly[0]
 Animal.belly[0]
 a.belly[0]
Reference Javascript Class static Keyword

Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 10000);
}
[ ]
for (var i = 1; i <= 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(j);
}
[ ]
while (var i=1; i<=4; i++) {
  setTimeout(function() {
    console.log(i);
    }, i*1000);
}
[x]
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
[ ]
for (var j = 1; j <= 4; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}
Reference setTimeout
Reference immediately invoked anonymous functions
Q9. How does a function create a closure?
 It reloads the document whenever the value changes.
 It returns a reference to a variable in its parent scope.
 It completes execution without returning.
 It copies a local variable to the global scope.
Reference

Q10. Which statement creates a new function called discountPrice?
[x]
let discountPrice = function (price) {
  return price * 0.85;
};
[ ]
let discountPrice(price) {
  return price * 0.85;
};
[ ]
let function = discountPrice(price) {
  return price * 0.85;
};
[ ]
discountPrice = function (price) {
  return price * 0.85;
};
Reference defining javascript functions

Q11. What is the result in the console of running the code shown?
var Storm = function () {};
Storm.prototype.precip = 'rain';
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
var bob = new WinterStorm();
console.log(bob.precip);
 Storm()
 undefined
 'rain'
 'snow'
Reference prototype chain

Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?
 /[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/
 /\d\d:\d\d:\d\d/
 /[0-9]+:[0-9]+:[0-9]+/
 / : : /
NOTE: The first three are all partially correct and will match digits, but the second option is the most correct because it will only match 2 digit time values (12:00:32). The first option would have worked if the repetitions range looked like [0-9]{2}, however because of the comma [0-9]{2,} it will select 2 or more digits (120:000:321). The third option will any range of time digits, single and multiple (meaning 1:2:3 will also match).

More resources:

Repeating characters
Kleene operators
Q13. What is the result in the console of running this code?
'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
 undefined
 window
 {desc: "logger"}
 function
Reference javascript classes

Q14. How would you reference the text 'avenue' in the code shown?
let roadTypes = ['street', 'road', 'avenue', 'circle'];
 roadTypes.2
 roadTypes[3]
 roadTypes.3
 roadTypes[2]
Reference accessing javascript arrays

Q15. What is the result of running this statement?
console.log(typeof 42);
 'float'
 'value'
 'number'
 'integer'
Reference javascript data types

Q16. Which property references the DOM object that dispatched an event?
 self
 object
 target
 source
Reference DOM events

Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?
function addNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
  }
}
 exception('One or both parameters are not numbers')
 catch('One or both parameters are not numbers')
 error('One or both parameters are not numbers')
 throw('One or both parameters are not numbers')
Reference javascript throw

Q18. Which method converts JSON data to a JavaScript object?
 JSON.fromString();
 JSON.parse()
 JSON.toObject()
 JSON.stringify()
Reference convert json to javascript object

Q19. When would you use a conditional statement?
 When you want to reuse a set of statements multiple times.
 When you want your code to choose between multiple options.
 When you want to group data together.
 When you want to loop through a group of statement.
Reference javascript conditionals

Q20. What would be the result in the console of running this code?
for (var i = 0; i < 5; i++) {
  console.log(i);
}
 12345
 1234
 01234
 012345
Reference javascript for loops

Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?
 Object.get()
 Object.loop()
 Object.each()
 Object.keys()
Reference javascript object static methods

Q22. What will be logged to the console?
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
 101
 3
 4
 100
Q23. What is one difference between collections created with Map and collections created with Object?
 You can iterate over values in a Map in their insertion order.
 You can count the records in a Map with a single method call.
 Keys in Maps can be strings.
 You can access values in a Map without iterating over the whole collection.
Explanation: Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size. Reference map methods javascript

Q24. What is the value of dessert.type after executing this code?
const dessert = { type: 'pie' };
dessert.type = 'pudding';
 pie
 The code will throw an error.
 pudding
 undefined
Reference working with js objects

Q25. 0 && hi
 ReferenceError
 True
 0
 false
Reference boolean logic

Q26. Which of the following operators can be used to do a short-circuit evaluation?
 \++
 \--
 \==
 \|\|
Reference short circuit javascript

Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?
 Student.parent = Person;
 Student.prototype = new Person();
 Student.prototype = Person;
 Student.prototype = Person();
Reference prototype object js

Q28. Why would you include a "use strict" statement in a JavaScript file?
 to tell parsers to interpret your JavaScript syntax loosely
 to tell parsers to enforce all JavaScript syntax rules when processing your code
 to instruct the browser to automatically fix any errors it finds in the code
 to enable ES6 features in your code
Reference what is use strict in js

Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?
 all of them
 const
 var
 let
Reference var vs let vs const in js

Q30. Which of the following values is not a Boolean false?
 Boolean(0)
 Boolean("")
 Boolean(NaN)
 Boolean("false")
Reference boolean of a string

Q31. Which of the following is not a keyword in JavaScript?
 this
 catch
 function
 array
Reference js reserved words

Q32. Which variable is an implicit parameter for every function in JavaScript?
 Arguments
 args
 argsArray
 argumentsList
Reference implicit js parameters for functions

Q33. For the following class, how do you get the value of 42 from an instance of X?
class X {
  get Y() {
    return 42;
  }
}
var x = new X();
 x.get('Y')
 x.Y
 x.Y()
 x.get().Y
Reference getters

Q34. What is the result of running this code?
sum(10, 20);
diff(10, 20);
function sum(x, y) {
  return x + y;
}

let diff = function (x, y) {
  return x - y;
};
 30, ReferenceError, 30, -10
 30, ReferenceError
 30, -10
 ReferenceError, -10
Reference accessing before initialization

Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?
 Objects are more efficient in terms of storage.
 Adding a record to an object is significantly faster than pushing a record into an array.
 Most operations involve looking up a record, and objects can do that better than arrays.
 Working with objects makes the code more readable.
Explanation: Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index. Reference efficiency of lookups

Q36. Which statement is true about the "async" attribute for the HTML script tag?
 It can be used for both internal and external JavaScript code.
 It can be used only for internal JavaScript code.
 It can be used only for internal or external JavaScript code that exports a promise.
 It can be used only for external JavaScript code.
Reference async attribute for html

Q37. How do you import the lodash library making it top-level Api available as the "_" variable?
 import _ from 'lodash';
 import 'lodash' as _;
 import '_' from 'lodash;
 import lodash as _ from 'lodash';
Reference how to import library in js

Q38. What does the following expression evaluate to?
[] == [];
 True
 undefined
 []
 False
Reference arrays in js are objects

Q39. What type of function can have its execution suspended and then resumed at a later point?
 Generator function
 Arrow function
 Async/ Await function
 Promise function
Reference what are generators in nodejs

Q40. What will this code print?
var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

f2();
 2
 1
 Nothing - this code will throw an error.
 undefined
Reference closures in js / nested functions

Q41. Which statement is true about Functional Programming?
 Every object in the program has to be a function.
 Code is grouped with the state it modifies.
 Date fields and methods are kept in units.
 Side effects are not allowed.
Reference functional programming

Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?
 You are calling a method named reduce on an object that's declared but has no value.
 You are calling a method named reduce on an object that does not exist.
 You are calling a method named reduce on an empty array.
 You are calling a method named reduce on an object that's has a null value.
Explanation: You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)

Q43. How many prototype objects are in the chain for the following array?
let arr = [];

 3
 2
 0
 1
Reference array prototype

Q44. Which choice is not a unary operator?
 typeof
 delete
 instanceof
 void
Reference js unary operators

Q45. What type of scope does the end variable have in the code shown?
var start = 1;
if (start === 1) {
  let end = 2;
}
 conditional
 block
 global
 function
Reference block vs function scope

Q46. What will the value of y be in this code:
const x = 6 % 2;
const y = x ? 'One' : 'Two';
 One
 undefined
 TRUE
 Two
Reference ternary operator js

Q47. Which keyword is used to create an error?
 throw
 exception
 catch
 error
Reference throwing errors in js

Q48. What's one difference between the async and defer attributes of the HTML script tag?
 The defer attribute can work synchronously.
 The defer attribute works only with generators.
 The defer attribute works only with promises.
 The defer attribute will asynchronously load the scripts in order.
Reference async vs defer

Q49. The following program has a problem. What is it?
var a;
var b = (a = 3) ? true : false;
 The condition in the ternary is using the assignment operator.
 You can't define a variable without initializing it.
 You can't use a ternary in the right-hand side of an assignment operator.
 The code is using the deprecated var keyword.
Reference ternary operator js

Q50. Which statement references the DOM node created by the code shown?
<p class="pull">lorem ipsum</p>
 Document.querySelector('class.pull')
 document.querySelector('.pull');
 Document.querySelector('pull')
 Document.querySelector('#pull')
Reference query selector

Q51. What value does this code return?
let answer = true;
if (answer === false) {
  return 0;
} else {
  return 10;
}
 10
 true
 false
 0
Reference javascript conditionals

Q52. What is the result in the console of running the code shown?
var start = 1;
function setEnd() {
  var end = 10;
}
setEnd();
console.log(end);
 10
 0
 ReferenceError
 undefined
Reference

Q53. What will this code log in the console?
function sayHello() {
  console.log('hello');
}

console.log(sayHello.prototype);
 undefined
 "hello"
 an object with a constructor property
 an error message
Reference prototypes

Q54. Which collection object allows unique value to be inserted only once?
 Object
 Set
 Array
 Map
Reference javascript sets

Q55. What two values will this code print?
function printA() {
  console.log(answer);
  var answer = 1;
}
printA();
printA();
 1 then 1
 1 then undefined
 undefined then undefined
 undefined then 1
Reference

Q56. How does the forEach() method differ from a for statement?
 forEach allows you to specify your own iterator, whereas for does not.
 forEach can be used only with strings, whereas for can be used with additional data types.
 forEach can be used only with an array, whereas for can be used with additional data types.
 for loops can be nested; whereas forEach loops cannot.
Reference Differences between forEach and for loop

Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?
 => ({})
 => {}
 => { return {};}
 => (({}))
Reference arrow functions

Q58. Why might you choose to make your code asynchronous?
 to start tasks that might take some time without blocking subsequent tasks from executing immediately
 to ensure that tasks further down in your code are not initiated until earlier tasks have completed
 to make your code faster
 to ensure that the call stack maintains a LIFO (Last in, First Out) structure
EXPLANATION: "to ensure that tasks further down in your code are not initiated until earlier tasks have completed" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.

Q59. Which expression evaluates to true?
 [3] == [3]
 3 == '3'
 3 != '3'
 3 === '3'
Reference booleans

Q60. Which of these is a valid variable name?
 5thItem
 firstName
 grand total
 function
Reference coding conventions

Q61. Which method cancels event default behavior?
 cancel()
 stop()
 preventDefault()
 prevent()
Reference javascript events

Q62. Which method do you use to attach one DOM node to another?
 attachNode()
 getNode()
 querySelector()
 appendChild()
Reference Node interface

Q63. Which statement is used to skip iteration of the loop?
 break
 pass
 skip
 continue
Reference break vs continue

Q64. Which choice is valid example for an arrow function?
 (a,b) => c
 a, b => {return c;}
 a, b => c
 { a, b } => c
Reference arrow functions

Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?
 class
 generator function
 map
 proxy
Reference javascript classes

Q66. How do you add a comment to JavaScript code?
 ! This is a comment
 # This is a comment
 \\ This is a comment
 // This is a comment
Reference comments in javascript

Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?
 TypeError
 SystemError
 SyntaxError
 LogicError
Reference javascript errors

Q68. Which method is called automatically when an object is initialized?
 create()
 new()
 constructor()
 init()
Reference javascript constructors

Q69. What is the result of running the statement shown?
let a = 5;
console.log(++a);
 4
 10
 6
 5
Reference ++x vs x++

Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?
button.addEventListener(
  'click',
  function (e) {
    button.className = 'clicked';
  },
  false,
);
 e.blockReload();
 button.preventDefault();
 button.blockReload();
 e.preventDefault();
Reference events in javascript

Q71. Which statement represents the starting code converted to an IIFE?
 function() { console.log('lorem ipsum'); }()();
 function() { console.log('lorem ipsum'); }();
 (function() { console.log('lorem ipsum'); })();
Reference what is an Immediately Invoked Function Expression

Q72. Which statement selects all img elements in the DOM tree?
 Document.querySelector('img')
 Document.querySelectorAll('<img>')
 Document.querySelectorAll('img')
 Document.querySelector('<img>')
Reference query selector

Q73. Why would you choose an asynchronous structure for your code?
 To use ES6 syntax
 To start tasks that might take some time without blocking subsequent tasks from executing immediately
 To ensure that parsers enforce all JavaScript syntax rules when processing your code
 To ensure that tasks further down in your code aren't initiated until earlier tasks have completed
Reference async function

Q74. What is the HTTP verb to request the contents of an existing resource?
 DELETE
 GET
 PATCH
 POST
Reference http methods

Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?
 focus
 blur
 hover
 enter
Reference javascript events

Q76. What is the result in the console of running this code?
function logThis() {
  console.log(this);
}
logThis();
 function
 undefined
 Function.prototype
 window
Reference what is the javascript window

Q77. Which class-based component is equivalent to this function component?
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
 class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }
 class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }
 class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }
 class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }
Q78. Which class-based lifecycle method would be called at the same time as this effect Hook?
useEffect(() => {
  // do things
}, []);
 componentWillUnmount
 componentDidUpdate
 render
 componentDidMount
Reference react lifecycle methods

Q79. What is the output of this code?
var obj;
console.log(obj);
 ReferenceError: obj is not defined
 {}
 undefined
 null
Reference working with objects

Q80. How would you use the TaxCalculator to determine the amount of tax on $50?
class TaxCalculator {
  static calculate(total) {
    return total * 0.05;
  }
}
 calculate(50);
 new TaxCalculator().calculate($50);
 TaxCalculator.calculate(50);
 new TaxCalculator().calculate(50);
Reference functions in javascript

Q81. What is wrong with this code?
const foo = {
  bar() {
    console.log('Hello, world!');
  },
  name: 'Albert',
  age: 26,
};
 The function bar needs to be defined as a key/value pair.
 Trailing commas are not allowed in JavaScript.
 Functions cannot be declared as properties of objects.
 Nothing, there are no errors.
Reference functions in javascript
Reference working with objects
Q82. What will be logged to the console?
console.log('I');
setTimeout(() => {
  console.log('love');
}, 0);
console.log('Javascript!');
[ ]
I
Javascript!
love
[ ]
love
I
Javascript!
 The output may change with each execution of code and cannot be determined.

[ ]

I
love
Javascript!
Reference https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified especially see the 'late timeouts' section.

Q83. What will this code log to the console?
const foo = [1, 2, 3];
const [n] = foo;
console.log(n);
 1
 undefined
 NaN
 Nothing--this is not proper JavaScript syntax and will throw an error.
Reference array deconstruction

Q84. How do you remove the property name from this object?
const foo = {
  name: 'Albert',
};
 delete name from foo;
 delete foo.name;
 del foo.name;
 remove foo.name;
Reference working with objects

Q85. What is the difference between the map() and the forEach() methods on the Array prototype?
 There is no difference.
 The forEach() method returns a single output value, whereas the map() method performs operation on each value in the array.
 The map() methods returns a new array with a transformation applied on each item in the original array, whereas the forEach() method iterates through an array with no return value.
 The forEach() methods returns a new array with a transformation applied on each item in the original array, whereas the map() method iterates through an array with no return value.
Reference map
Reference Differences between forEach and for loop
Q86. Which concept does this code illustrate?
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var addFive = makeAdder(5);
console.log(addFive(3));
 overloading
 closure
 currying
 overriding
Reference currying

Q87. Which tag pair is used in HTML to embed JavaScript?
 <script></script>
 <js></js>
 <javascript></javascript>
 <code></code>
Reference add js to html file

Q88. What would be the result in the console of running this code?
for (var i = 0; i < 5; i++) {
  console.log(i);
}
 0 1 2 3 4
 0 1 2 3 4 5
 1 2 3 4
 1 2 3 4 5
Reference Differences between forEach and for loop

Q89. What is the value of dessert.type after executing this code?
const dessert = { type: 'pie' };
dessert.type = 'pudding';

const seconds = dessert;
seconds.type = 'fruit';
 pie
 fruit
 undefined
 pudding
Explanation: Assigning a variable (such as seconds) to an object (such as dessert) does not create a new object. The seconds variable merely becomes a reference for the dessert object. Any changes made to seconds will also reflect in dessert.

Q90. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?
 Security-Mode
 Access-Control-Allow-Origin
 Different-Origin
 Same-Origin
Reference Cross-Origin Resource Sharing

Q91. What will be logged to the console??
'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
 window
 undefined
 function
 {desc: "logger"}
Reference strict in javascript classes

Q92. Which statement is applicable to the defer attribute of the HTML <script> tag?
 defer causes the script to be loaded from the backup content delivery network (CDN).
 defer allows the browser to continue processing the page while the script loads in the background.
 defer blacks the browser from processing HTML below the tag until the script is completely loaded.
 defer lazy loads the script, causing it to download only when it is called by another script on the page.
Explanation: If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing. HTML <script> defer Attribute

Q93. What will this code print?
let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
rainForests.splice(0, 2);
console.log(rainForests);
 ["Amazon","Borneo","Cerrado","Congo"]
 ["Cerrado", "Congo"]
 ["Congo"]
 ["Amazon","Borneo"]
Reference array methods

Q94. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?
const numbers = [1, 2, 3, 4, 5];
//MISSING LINE
 const [one,two,three,four,five]=numbers
 const {one,two,three,four,five}=numbers
 const [one,two,three,four,five]=[numbers]
 const {one,two,three,four,five}={numbers}
Reference array destructuring

Q95.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  ...obj,
  a: 0,
};

console.log(obj2.a, obj2.b);
 Nothing, it will throw an error
 0 2
 undefined 2
 undefined 2
Reference spread syntax es6

Q96. Which line could you add to this code to print "jaguar" to the console?
let animals = ['jaguar', 'eagle'];
//Missing Line
console.log(animals.pop()); //Prints jaguar
 animals.filter(e => e === "jaguar");
 animals.reverse();
 animals.shift();
 animals.pop();
Reference Javascript Array Reverse

Q97. What line is missing from this code?
//Missing Line
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
  //Each letter printed on a separate line as follows;
  //a
  //e
  //i
  //o
  //u
}
 let vowels = "aeiou".toArray();
 let vowels = Array.of("aeiou");
 let vowels = {"a", "e", "i", "o", "u"};
 let vowels = "aeiou";
Reference working with arrays

Q98. What will be logged to the console?
const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log(y);
 undefined
 One
 true
 Two
Reference ternary operator js

Q99. How would you access the word It from this multidimensional array?
let matrix = [["You","Can"],["Do","It"],["!","!","!"]];

 matrix[1[2]]
 matrix[1][1]
 matrix[1,2]
 matrix[1][2]
Q100. What does this code do?
const animals = ['Rabbit', 'Dog', 'Cat'];
animals.unshift('Lizard');
 It adds "Lizard" to the start of the animals array.
 It adds "Lizard" to the end of the animals array.
 It replaces "Rabbit" with "Lizard" in the animals array.
 It replaces "Cat" with "Lizard" in the animals array.
Reference working with arrays

Q101. What is the output of this code?
let x = 6 + 3 + '3';
console.log(x);
 93
 12
 66
 633
Reference type coercion

Q102. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?
 else
 when
 if
 switch
Reference switch

Q103. Which statement prints "roar" to the console?
var sound = 'grunt';
var bear = { sound: 'roar' };
function roar() {
  console.log(this.sound);
}
 bear.bind(roar);
 roar.bind(bear);
 roar.apply(bear);
 bear[roar]();
Reference Apply
Reference this
Reference bind
Q104. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?
 a, b => { return c; }
 a, b => c
 { a, b } => c
 (a,b) => c
Reference arrow functions

Q105. Which code would you use to access the Irish flag?
var flagsJSON =
  '{ "countries" : [' +
  '{ "country":"Ireland" , "flag":"🇮🇪" },' +
  '{ "country":"Serbia" , "flag":"🇷🇸" },' +
  '{ "country":"Peru" , "flag":"🇵🇪" } ]}';
var flagDatabase = JSON.parse(flagsJSON);
 flagDatabase.countries[0].flag
 flagDatabase.countries[1].flag
 flagsJSON.countries[0].flag
 flagDatabase[1].flag
Reference working with objects

Q106. Which statement correctly imports this code from some-file.js?
//some-file.js
export const printMe = (str) => console.log(str);
 import printMe from './some-file';
 import { printMe } from './some-file';
 import default as printMe from './some-file';
 const printMe = import './some-file';
Reference importing libraries in javascript

Q107. What will be the output of this code?
const arr1 = [2, 4, 6];
const arr2 = [3, 5, 7];

console.log([...arr1, ...arr2]);
 [2, 3, 4, 5, 6, 7]
 [3,5,7,2,4,6]
 [3, 5, 7, 2, 4, 6]
 [[2, 4, 6], [3, 5, 7]]
 [2, 4, 6, 3, 5, 7]
Reference spread syntax

Q108. Which method call is chained to handle a successful response returned by fetch()?
 done()
 then()
 finally()
 catch()
Reference fetch

Q109. Which choice is not an array method?
 array.slice()
 array.shift()
 array.push()
 array.replace()
Reference working with arrays

Q110. Which JavaScript loop ensures that at least a singular iteration will happen?
 do…while
 forEach
 while
 for
Reference loops in js

Q111. What will be logged to the console?
console.log(typeof 'blueberry');
 string
 array
 Boolean
 object
Reference what is typeof

Q112. What is the output that is printed when the div containing the text "Click Here" is clicked?
//HTML Markup
<div id="A">
  <div id="B">
    <div id="C">Click Here</div>
  </div>
</div>
//JavaScript
document.querySelectorAll('div').forEach((e) => {
  e.onclick = (e) => console.log(e.currentTarget.id);
});
 C B A
 A
 C
 A B C
Reference query selector
Reference events
Q113. What will this code log to the console?
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};
console.log(myFunction(myNumbers));
 [4,5,6,7,8,9,10]
 [4,5,6,7]
 [1,2,3,4,5,6]
 [4,5,6]
Reference functions in javascript

Q114. What does this code print to the console?
let rainForestAcres = 10;
let animals = 0;

while (rainForestAcres < 13 || animals <= 2) {
  rainForestAcres++;
  animals += 2;
}

console.log(animals);
 2
 4
 6
 8
Reference MDN JavaScript Looping code

Q115. Which snippet could you add to this code to print "YOU GOT THIS" to the console?
let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];
let plainText = '';

/* Missing Snippet */

console.log(plainText); //Prints YOU GOT THIS
[ ]
for (let key of cipherText.keys()) {
  plainText += key % 2 === 0 ? key : ' ';
}
[ ]
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 !== 0 ? value : '';
}
[x]
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : '';
}
[ ]
for (let value of cipherText) {
  plainText += value;
}
Reference MDN JavaScript Destructuring
Reference MDN JavaScript Array entries
Reference MDN JavaScript Remainder/Modulo
Q116. What will this code log to the console?
const foo = [1, 2, 3];
const [n] = foo;
console.log(n);
 undefined
 1
 NaN
 Nothing. This is not proper JavaScript syntax and will throw an error.
Q117. Which Pokemon will be logged to the console?
var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];
pokedex.pop();
console.log(pokedex.pop());
 Charmander
 Jigglypuff
 Snorlax
 Squirtle
Explanation: The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

Reference Array.pop

Q118. Which snippet allows the acresOfRainForest variable to increase?
let conservation = true;
let deforestation = false;
let acresOfRainForest = 100;

if(/* Snippet goes here */){
    ++acresOfRainForest;
}
 !deforestation && !conservation
 deforestation && conservation || deforestation
 conservation && !deforestation
 !conservation || deforestation
Reference if...else statements

Q119. Which statement can be used to select the element from the DOM containing the text "The LinkedIn Learning library has great JavaScript courses" from this markup?
<h1 class="content">LinkedIn Learning</h1>
<div class="content">
  <span class="content">The LinkedIn Learning library has great JavaScript courses!</span>
</div>
 document.querySelector("div.content")
 document.querySelector("span.content")
 document.querySelector(".content")
 document.querySelector("div.span")
Q120. Which value is not falsey?
 []
 undefined
 0
 null
Reference Falsy

Q121. What line of code causes this code segment to throw an error?
const lion = 1;
let tiger = 2;
var bear;

++lion;
bear += lion + tiger;
tiger++;
 line 5, because lion cannot be reassigned a value
 line 6, because the += operator cannot be used with the undefined variable bear
 line 5, because the prefix (++) operator does not exist in JavaScript
 line 3, because the variable bear is left undefined
Reference const in js
Reference TypeError: invalid assignment to const "x"
Q122. What will be the value of result after running this code?
const person = { name: 'Dave', age: 40, hairColor: 'blue' };
const result = Object.keys(person).map((x) => x.toUpperCase());
 It will throw a TypeError.
 ["Name", "Age", "HairColor"]
 ["DAVE", 40, "BLUE"]
 ["NAME", "AGE", "HAIRCOLOR"]
Reference Object.keys()
Reference Array.prototype.map()
Reference String.prototype.toUpperCase()
Q123. Which snippet could you insert to this code to print "swim" to the console?
let animals = ["eagle", "osprey", "salmon"];
let key = animal => animal === "salmon";

if(/* Insert Snippet Here */){
  console.log("swim");
}
 animals.every(key)
 animals.some(key).length === 1
 animals.filter(key) === true
 animals.some(key)
Reference Array.prototype.some

Q124. What is the output of this code?
class RainForest {
  static minimumRainFall = 60;
}

let congo = new RainForest();
RainForest.minimumRainFall = 80;
console.log(congo.minimumRainFall);
 undefined
 None of these answers, as static is not a feature in Javascript.
 60
 80
Reference Classes static

Q125. How can you attempt to access the property a.b on obj without throwing an error if a is undefined?
let obj = {};
 obj?.a.b
 obj.a?.b
 obj[a][b]
 obj.?a.?b
Reference Optional chaining (?.)

Q126. What happens when you run this code?
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}
console.log(x + y + z);
 It will throw a ReferenceError about x.
 It will print 18.
 It will print undefined.
 It will throw a ReferenceError about y.
Reference let statement

Q127. What does this code print to the console?
const x = [1, 2];
const y = [5, 7];
const z = [...x, ...y];
console.log(z);
 [1,2,5,7]
 [[1, 2], [5, 7]]
 [2,7]
 [2,1,7,5]
Reference spread syntax (...)

Q128. Given this code, which statement will evaluate to false?
const a = { x: 1 };
const b = { x: 1 };
 a['x'] === b['x']
 a != b
 a === b
 a.x === b.x
Reference

Q129. What will this code log to the console?
console.log(typeof 41.1);
 Nothing. It resuults in a ReferenceError.
 decimal
 float
 number
Reference

Q130. What is the output of this code?
let scores = [];
scores.push(1, 2);
scores.pop();
scores.push(3, 4);
scores.pop();
score = scores.reduce((a, b) => a + b);
console.log(score);
 3
 4
 6
 7
Reference Reference Reference

Q131. What does this code print to the console?
let bear = {
  sound: 'roar',
  roar() {
    console.log(this.sound);
  },
};

bear.sound = 'grunt';
let bearSound = bear.roar;
bearSound();
 Nothing is printed to the console.
 grunt
 undefined
 roar
