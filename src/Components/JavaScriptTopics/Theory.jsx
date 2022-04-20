// DOM - Virtual DOM - Real DOM - React js is use the virtual dom
// Virtual DOM is fast update and take less memory space compare to real DOM
// Virtual DOM is copy of Realdom but if kuch chaneg karne pe wo sirt ussi line ko change karega naki puree page koo

import { Component } from "react";

// Async await
// Async await ek promise function return karta hai like if koi peace of code already run ho raha hai so wo usko
// run hone dega aur await wali line apne response aane ka wait karega jese he wo response ayega wese he woh run ho jayega
// but baki  kisi ko  wo rukne nhi deta Backfground me code run hote rehta hai

// Scoping
// Function Scope , Block Scope , Global Scope,
// {} - block Scope
// function scope(){
//     console.log("Function Scope")
// }

// PWA
// Progressive Web Application

// JSON
// JSON is an open standard file format and data interchange format that uses human-readable text

// RestFull API's
// Its give the HTTP request like get post delete put

// CORS
// LocalHost Port Issues

// Controlled component = Wo components jo react dwyara handle kiye jaaaye or react hooks dwara handle kiye jaaye
// Uncontrolled component = Wo components jo DOM dwyara handle kiye jaaay.

// Portal in ReactJs = Raact has one main root document when we create one another like root1 in index.html thats called portal

// useStrict or <React.StrictMode> is use for in our component if any code is not in use then its show the
// error something is not used its improve our code performance.

// concat array method = "its add the multiple aaray in one aaray"

// Event Bubling and Event Capturing Mostly we use Event Bubling
//
// In Event bubling Suppose we give the on click method on one body, div and button and then when we click on button then
// first they called button then div then body
// But Opposite in Event Capturing first called body thenn div then button

// Debouncing and Throttling

// Debouncing - After kisi bhi button k clic karne k some time baad api call hoga

// Throttling - if hum kisi button pe baaar bar click krte rahe then uspe api bhi baar
// baar call hogi usse hamari website ki performance kaharab hooge issliye hum throttling
// function me time delay lagate haii ki user kitne bhi baar click kare but api 2 second ka
// time leke he call ho

// Truthy and falsy value

// Truty - true, 10, "0", [].{ }
// Falsy - false, 0, "", null, undefined

// Execution Conetxt - its means jaha javascript ka pura code
// store hota hai like 2 part ek side memeory and second side code

// Object.freeze - Ye object ko freze kar deta hai like phir hum object ka value change nhi kar sakte
// let obj = { name: "Suraj", email: "sarry@gmail.com", }
// Object.freeze(obj)
// obj.name="Sarry"

// Local storage and session storage
// Session storage - Isme sare keys and values delete ho jate hai jab hum chrome close krr dete hai
// Local storage - Isme sari values save he rehti hai


// Generator function
//     function* GeneratorFx() {
//         yield 1;
//         yield 2;
//         yield 3;

// }
// const gen = GeneratorFx()
// gen.next() = { value: 1, done: false }
// gen.next() = { value: 2, done: false }
// gen.next() = { value: 3, done: false }
// gen.next() = { done: true }

// How to stop event propagation in Javascript
// Suppose ek body pe and ek div pe onclick method laga hua hai if hum div pe click kare toh
// body ka method bhi apne aap call hoga uss condition me hum event.stopPropagation karte hai
// taki sirf div k click pe div ak methd cal ho naki body ka
// event.stopPropagation();

// Temporal Dead Zone
// console.log(a)
// let a = 10
// Like kisi bhi chiz ko define se leke inticilize hone k time ko dead zone bolte hai

// Types of errors

// Type error - Example -
// const b = 1000;
// b = 1000

// Syntax error - Example -
// const b;
// or
// let a=10
// let a=100

// Reference Error - Example -
//  console.log(a);
//  let a= 1000

// Anonnymous Function
// Wo function jiska koi name nhi hota 


// Pure Component
// Git reset
// Process.ENV File
