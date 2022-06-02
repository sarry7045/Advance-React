// Javascript is a single threathed syncrones Language

// DOM - Virtual DOM - Real DOM - React js is use the virtual dom
// Virtual DOM is fast update and take less memory space compare to real DOM
// Virtual DOM is copy of Realdom but if kuch chaneg karne pe wo sirt ussi line ko change karega naki puree page koo

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

// Execution Context - its means jaha javascript ka pura code
// store hota hai or execute hota hai like 2 part ek side memeory and second side code

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
// Wo function jiska koi name nhi hota]
// let show = function () {
//     console.log("anyfunction")
// }

// Optimize React app Performance   = useMemo , Lazy Loading

// useEffect me if hum [] na lagaye toh wo baar baar cal hota rahega n wo lagane se sirf first render pe cal hoga
// useEffect(() => {

// }, [])

// client/static side rendering and server side rendering
// client/static side renderign
// Isme ye puure project ka ek he sath build file bana k rakh leta hai then jese he koi user
// click kare toh wo reponse dede suppose koi user home page se service page prr click kiya
//  then wo request alredy build ho chuka hai

// server side renedring
// Isme jab koi user 1 page se dusre page me redirect hota hai then wo request ka response
// direct server se aata hai

// Prop Dilling
// Isme parent component se child component ko data bhejne k liye ek page se dusre page me paas krna hota hai
// iska solution hai context api

// concat ,join , slice array method
// concat = ye multiple aaray ko join krke ek me karr deta hai
var a = ["1", "2", "3"];
var b = ["4", "5"];
var c = ["6", "7"];
var d = a.concat(b, c);
var e = a.join("-");
// its print like this 1-2-3

// slice  = suppose hume ye aaray mese 3 value pritn krni hai soo uske liye humm slice use krte hai
var a = ["suraj", "neeraj", "aditya", "ashish", "vinod"];
var b = a.slice(0, 2);

// UseMemo and useCallBack
// useCallback catch the function and useMemo cache the valud

// UseEffect uses
// useEffect use as a lifeCycle method in functional component
// Session storage vs Redux

// Pure Component
// Git reset
// Process.ENV File

// Synethtic Event
// e.preventDefault() prevents all the default behavior by the browser.

// Error Handling - Class component
// 404 Page in next js - Simply crete one 404 page in pages folder in create our own page
// use of webpack - module bundle , its solvee the dependeie problms
// 504 error code means - gateway timeout error

// legal number and unlegal number
// legal number 10, 2, 45,
// unlegal number suppose 20/suraj

// Var vs Let and Const
// Argument object in Javascript
// NAN in javascript
// cookies stored in browser folder

// array and object destructuring
// const [value, setvalue] = useState({ name: "", roll: "", address: "" });
// const { name, roll, address } = value;
// and
// let users = ["suraj", 25, "yadav", 26];
// let [namee, age, lname, rolll] = users;

// lifeCycle method in function component like in useEffect
// in class componentDidmount , componentDidUpdate, componentWillUount
// componentDidmount - jab first render ho tab like api Call
// componentDidUpdate - jab hum ek page se dusre page prr jaaye tab

// form in react
// const [value, setvalue] = useState({ name: "", roll: "", address: "" });
// const { name, roll, address } = value;
// const handleChange = (e) => {
//     setvalue=({ ...value, [e.target.name]: e.target.value})
// }
// onChange={(e)=>handleChange(e)}

// synchronous - isme jab tak ek kaam na ho wo dusre kaam krne nhi jata hai means line by line kaam hota hai
// asynchronous - but isme ye rukta nhi hai jo kaam jaldi ho jata hai usko karr deta hai

// chrome has there own runtime engine V8Engine

// event loop - Execution Context jaha code save hote jata hai and waha se he pura flow deside hota hai
// jese he kaam done ho jata hai stack mese wo code ko aage push karr deta hai

// how to perform asynccrnos in javasript
// can setState directly update or ?

// spread opearatr vs restOpearator
// spread opearatr -
// const a = ["1", "2", "3"];
// const b = [...a, "4", "5", "6"];
// restOpearator -
//   function addNumber(...inputs) {
//     console.log(inputs);
//   };

// addNumber(4, 5, 6);

// how javascript run in browser - javascript is single thrreded syncrones lanuguage it means wo ek
// baar me ek hee kaam karega
// evrything in javascript happens inside an Execution Contextt

// how react works in broswer - react is not a mvc framework - if we change anything in ui then virtual dom is
// compaer the updated code and curret then jo update hua hoga wo sirf ussi ko update karr deta hai

// babel - javascript complier

// logical operator
// && and
// || origin
// ! not

// DOM
// dom hum use krte hai kisi bhi value ko get ya set krne me
// examle react index.html rooot id then getElementById "root"

// addEventListener - onClick and onchange etc.

// React custom hooks - if hume kuch functionality use krna hai aur wo functionaluty hooks me nhi hai
// then hum koi bhi ek functinalty banate hai and usko as a hook use ktr hai

// Polymorphism - Suppose hume multiple buttons pe multiple logic call krna hai then
// hum harr button pe alag alag work ka logic de denge

// non primitive data types - object , arrays

// we cannot create variable like this
// var sut dent = "suraj"
// and
// var 10student =" suraj"

// queryselector - it is javascript DOM Method
// queryselector - isme woh first element or id or class ko pehle catch karta hai jo first number pe rahega usko print
// krr dega
// exmaple : - var result= document.querySelector("p","#container",".containr1")



// prevent re renndering in react components

// let var const
// we can creating multiple variable with same name in var
// but in not let and const
// var student = "suraj"
// var student = "suraj"
// but not in let and const
// let studentt = "suraj"
// studentt = "neeraj"
// but in not const

// normalize();
// ye multiple element ko ek me add krne ka kaam krta hai
// targetNode.normalize();


// const string = "4,a,1.5,d,22,4,z,33.6,44,12,9"
// Example:Input: Abbaaacddda
// Output: 1A2b3a1c3d1a
// var num=-5; function display() { document.writeln(num/0); }
