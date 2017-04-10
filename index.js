'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/*
This function has one parameter that can be any data type. It 
then returns the input value.
@anything: can take a value of any data type.
*/
 function identity(anything){
    return anything;
}
module.exports.identity = identity;
/*
typeOf is a variable assigned to a function. The function to which it is assigned has 
one parameter and it can be of any data type.
The first if statement tests if the the input item is an array by running a boolean comparison.
It the input item is an array, the function then returns the string "array." The next statement 
tests if the input item is a null, if so, it returns the string "null." If neither of the first 
conditions are met, the function then returns the data type of the input item.
@anything: can take any value of any data type
*/
 function typeOf (anything){
    if (Array.isArray(anything) === true){ 
        return "array";
    } else if (anything === null ){
        return "null";
    } else return typeof anything;
}
module.exports.typeOf = typeOf;
/*
first is a variable assigned to a function that can take an array and a number as its two 
parameters. The function contains three if statements. the first checks to see if the input value
for the parameter array is not an array or if the input number is less than zero, making it nagative.
If the either of these boolean statements returns true then the function will return an empty array.([])
The second statemet checks to see if the input number is a number and if a value was input for this parameter.
If either num is unidentified, no value in put, or not a number then the function returns the first element of
the input array. The last if statment checks with a boolean comparison to see if the input number is greater 
than the length of the input array. If none of the conditions are met then the array elements from the 0eth
element to the element corresponding with the input number.
@ array: takes an array, if not an empty array is returned
@ num: takes a number, if num is not a number an empty array is returned
*/
function first(array, num){
    if (!Array.isArray(array)  || num < 0){
        return [];
        } else if (num === undefined || isNaN(num)) {
        return array[0];
    } else if( num > array.length){
        return array;
    } else return array.slice(0, num);
    
}
module.exports.first = first;
/*
Last is assigned to a function and has two parameters
The first parameter must be an array and the second a number.
With in the function there is a series of if else staemetns that read:
if the parameter number is not given(undefined) or is not a number then the function will 
return the element at array length-1. If both those things are not met then the function checks to see if the 
parameter number is larger than the length of the input array. If so it returns the array, if not it chects to see
if the array is not an array and if the number is negative. If either of those are true then an empty array is returned
If none of those conditions are met then the the elements from the end of the array to the element corresponding with the
input number
@ array: takes an array, if not an array an empty array is returned
@ num: takes a value of a number, if not a number then an empty array is returned.
*/
 function last(array, num){
    if ( num === undefined || isNaN(num)){
        return array[array.length-1];
        }
        else if (num > array.length){
            return array;
        }else if(!Array.isArray(array) ||  num < 0){
        return [];
    } else return array.slice(array.length-num)
}
module.exports.last = last;
/*
Each is a function that has two parameters which the first can be either an object or an array. The second
must be a function. The function checks to see if the input collection is an array. If the input is an array then 
the function loops over the input array. If the input collection is an object the function loops the object runs a terunary
function on each of the keys in the object. There is no returned value for this function.
@ collection: this parameter takes either an object or an array. 
@ func: takes a function. Can be any function.
*/
 function each(collection, func){
    if (Array.isArray(collection)){
        for( var i =0; i < collection.length; i++){
        func(collection[i], i, collection);
        }
    }else  if (typeof collection === "object"){
        for (var key in collection){
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
//Usage:
//This function is used to replace loops
/*
indexOf is a functin which takes two parameters. The first must be an array. The second should be some sort of value
which can be any data type. The functin then loops through the array to see if any of the elements in the array match
the input value. If so, the array element which matches is return. If not, it returns -1.
@ array: takes an array
@ value: takes any data type.
*/
 function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
       if (array[i] === value){
            return i;     
      }
    } return -1;
}
module.exports.indexOf = indexOf;
/*
 The filter function takes two parameters. The first is an array the second a function. 
 With in the function a new variable newArray is declared to be an empty array. The each function,
 which loops over the input array. for each element in the input array the function checks to see if 
 the input element and index are true for the input array. if so the value (element) is pushed into the
 newArray array. That newArray is then returned.
@ array: this parameter takes an array. 
@ func: takes a function. Can be any function.
*/
function filter(array, func){
    var newArray= [];
     each(array, function(value, position, array){
        if (func(value, position,array) === true){
            newArray.push(value);
        } 
        });
        return newArray;
}
module.exports.filter = filter;
/*
reject is a function with two parameters. An array and a fucntion. A new variable of an empty
array is created. Then the filter function is called with the parameters of the input array and a function
with 3 parametrs, the array element, index position and the array itself. If the input function evaluates to false 
then the function pushes the value into the newArray and returns that array.
@ array: this parameter takes an array. 
@ func: takes a function. Can be any function.
*/
function reject(array, funct){
    var newArray = [];
    filter(array, function(value,position,array){
        if (funct(value,position, array) === false){
            newArray.push(value);
        }
    });return newArray;

}
module.exports.reject = reject;
/*
partition is a function with two parameters. The first is an array and the other a function. The output array 
is created and then the results of the filter function plus concacted with the results of the reject function
are pushed to the output array. The outArray is then returned.
@ array: this parameter takes an array. 
@ func: takes a function. Can be any function.
*/
function partition(arr, func){
    var outArray =[];
    outArray.push(filter(arr, func)) + outArray.push(reject(arr, func));
        return outArray;
    };
    module.exports.partition = partition;
   /*
   unique is a function that takes only one parameter which must be an array. newArray is created as an empty
   array. The each function is then called on the input array, with a turnary function being its second parameter.
   In the each function the index of function is called on the new array to see if the element is already in the array.
   If it is not, meaning the filter returned -1, then the element is pushed to the new array.  The newArray variable is 
   then returned.
   @ array: this parameter takes an array. 
   */ 
function unique(array){
    var newArray =[];
each(array, function(element, index ,collection){
    if (indexOf(newArray, element) === -1){
        newArray.push(element);
    }
})
   return newArray;
}
module.exports.unique = unique;
/*
Map is a function taking two parameters. One being a collectin, an object or an array, the other being a function. A new empty array is
created in a new variable. The each function is then called with the input collection and a function with the parameters of the element, index,
and input collection. The function then pushes the result of the function into the new array variable.  That array is then returned. 
@ collection: this parameter takes an array or an object. 
@ func: takes a function. Can be any function.
*/
 function map(collection, func){
   var newArray = [];
        each(collection, function(element,index, collection){
       newArray.push(func(element,index,collection));
   
   } ); return newArray;
}
module.exports.map = map;
/*
pluck if a function with two parameters. The first takes either an array or object the second a function. 
 The result of the map function is returned. Which will give back an array with the results of the each function
 which, in this case, loops through given array with the aprameters of the element, index and collection.
@ collection: this parameter takes an array or an object. 
@ func: takes a function. Can be any function.
*/
 function pluck(collection, property){
    return map(collection, function(element,index, collection){
       return element[property];
       })
        
    }
    module.exports.pluck = pluck;
/*
containes is a fucntion with two parameters. One being an array the other a value of any data type. 
Contains returns the results of the indexOf function on the array checking for the value with in the array. 
The value true or false is retruend based on whether the given value is in the given array.
@ array: takes an array
@ value: takes a value of any data type. 
*/
    _.contains= function(array, value){
    return (indexOf(array, value) >= 0) ? true :false;
       
    } 
     module.exports.contains = contains;
     /*
     every is a function taking two parameters. One being a collection, an array or object, the other a fucntion.
     The variable flag is created and assigned to true. If the function is undefined, the input func is assgned 
     to the identity function. If the func is indeed defined then the each function is called on the element, index and 
     collectin. If the function with those three paramerts is false, the flag variable is set to false and returned.
     @collection: takes an array or object. 
     @func: takes a function.
     */
 function every(collection, func){
    let flag = true;
    if(func === undefined ){
        func =identity;
}
    each(collection, function(element, index, coll){ //=> repalces key word functoin
        if( func(element,index, coll) === false){
        flag = false;
        }
    }); return flag;
}
     module.exports.every = every;

/*
some is a function taking two parameters. A collection, being an array or object, and a function. Flag is created 
and set to false. if the input function is undefined it is assigned to the identity function. If this is not the case,
then each is called on the collection and given a function with the parameters of the element, index and input collection
if the input func is true then flag is set to true and returned.
@collection: takes an array or object. 
@func: takes a function.
*/
 function some(collection, func){
    let flag2 = false;
    if(func === undefined ){
        func =identity;
}

    each(collection, function(element, index, coll) { //=> repalces key word functoin
        if( func(element,index, coll) === true){
        flag2 = true;
        }
    }); return flag2;
}
     module.exports.some = some;
     
     /*
     reduce is a function that takes three parameters.the first must be an array, the second a function, and 
     the third a seed(a value).the variable previous is created and assigned to the value of seed. We then create
     the variable I as to declare it prior to it being declared in the for loop below. 
     */
      function reduce(array, func, seed){
    let previous = seed;
    var i = 0;
    if (seed === undefined){
        previous = array[0];
        i= 1;
    }
    for( ; i <array.length; i++){
           previous =  func(previous, array[i], i, array)
    } return previous;
}
module.exports.reduce = reduce;
function extend(object1, object2) {
    each(arguments, function(obj, i, args) {
        each(obj, function(value, key, obj) {
            object1[key] = value;
        })
    })
    return object1;
}
module.exports.extend = extend;
//Usage
//console.log(["a", "b", "c"], "pizza"); -> loggs "a"
//console.log(["a", "b", "c"], 2); -> logs "a" and "b"
//console.log("not an array", 2); -> logs an empty array []

