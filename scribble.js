//data types
    //number 12
    //string "hello world"
    //array  [] -> ordered list
    //object {} -> look-up dictionary
    //boolean -> true or false
    //undefined
    //null 

//variables --- like nouns
  //something that represents a piece of data

//variable declarations
  //let
  //const
  //var

//l let x = 12; 
// console.log(x, "x: first I am 12");

//string
let x = "hello world";

//undefined
let y;

//null
// let y = null;

//array  -> list of fruits
//arrays have indexes that start at 0
//                  0          1         2       3             4
const ogFruits = ["bananas", "apples", "mangos", "grapes", "strawberries"];
const moFruits = ["pineapples", "kiwis", "plums", "strawberries"]
const favFruits = [];
//accessing index -> fruits[1] -> "apples"
//loops
  //for loop -> loops through the array
  //for of
  //for in loop
  //while loop
        //camelCase
                    //parameter
function listFruits(fruitsArr) {
  //    temp variable    boolean expression  incrementation
  for (let i = 0; i < fruitsArr.length; i++) {
      if (fruitsArr[i] === "apples" )
      console.log("I got some " + fruitsArr[i]);
  }
}

//invoking a function -> calling on function "Do what you do"
        //arguments
listFruits(ogFruits);

//conditionals => if / else
  //if somethine is true => do this
  //else => do that

//functions -> like a VERB -> reusable (modular); it's a recipe; instructions
          // -> 