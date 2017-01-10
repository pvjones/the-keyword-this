//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//Answer
//It's a keyword that allows a function you call upon be implicitly or explicitly bound to a particular object. This is beneficial because it allows that function to be multi-purpose. It can be bound to different objects in different contexts. This is also beneficial for semanitic code.

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//Answer
//Explicit: This means that the function is bound to a particular context as specifically stated in the code, using either .call, .apply, or .bind. This means that a function can exist outside an object, and be "manually" bound to a variety of different objects.
//Implicit: This means that the function is bound to whatever object in which it is contained. The object name does not have to be directly supplied to the function. 
//Default: This means that there is neither explicit nor implicit binding of the function to a particular object or context. The binding therefore "defaults" to the global or window level object.
//New: This keyword instantiates a new object, which is created according to the function supplied. The "this." keyword as used inside a function which is invoked following "new" keyword will therefore be bound to this object that was instantiated with the keyword new.

// 3) What is the difference between call and apply?

//Answer
//.call is used to immediately invoke a function. The first parameter passed into the invoked function supplies the context or object to which the function's "this." keyword will be bound. The remaining parameters will be used to supply arguments to the function.
//.apply is very similar. The first parameter provides the context to which the function will be bound. However, .apply only accepts two arguments. The second argument must be an array, which contains a set of arguments which will be passed into the invoked function.

// 4) What does .bind do?

//Answer
//.bind does not immediately invoke the function. Instead it creates a new copy of the function, which is permanently bound to a context or object. When invoking a function with .bind, only one argument is supplied--this is the context to which the new copy of the function will be bound.



//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
  username: 'flibbertygibbet',
  email: 'hawtlady@hotmail.com',
  getUsername: function() {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(n) {
    this.move += 10;
    return this.move;
  }
};

//Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function() {
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here
console.log(getYear.call(prius));
console.log(getYear.call(mustang));

//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
  return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
//Answer Here
//getMyUsername, as invoked above, will return "undefined". This is because the "this." keyword of the function is not implicitly or explicitly bound. It therefore defaults to the window object, where it is not defined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//Answer Here
//The "this." keyword is bound according to the "default" rule, which means that it is bound to the window object. 

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
  return this.username;
};

var userName = getMyUsername.call(myUser);