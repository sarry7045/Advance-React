 // null undefined == ===

  // Object = { name: "suraj" }
  // JSON =[{"name":"suraj"}]

  // ifElse Condition

  // var condition = "sunny";

  // if (condition == "rain") {
  //   console.log("Its Rainy day");
  // } else {
  //   console.log("Not a Rainy day");
  // }

  // var name = "sura";

  // if (name == "suraj") {
  //   console.log("me suraj hu ");
  // } else {
  //   console.log("me suraj nhi hu");
  // }

  // Ternory Operator

  // var age = 19
  // console.log((age>18) ? "You can vote " : "You can;t vote")

  // var condition="snny"
  // console.log((condition=="sunny") ? "Its sunny day ": "Its a Rainy Day")

  // var country = "India"
  //   console.log((country==="India")? "Indiann":"Forgien")

  // Switch Statement

  // var area = "circle";

  // switch (area) {
  //   case "recetangle":
  //     console.log("recetangle");
  //     break;
  //   case "traingle":
  //     console.log("traingle");
  //     break;
  //   case "circle":
  //     console.log("circle");
  //     break;
  //   default:
  //     break;
  // }

  // var country = "Newzeland"

  // switch (country) {
  //   case "India":
  //     console.log("Indian ")
  //     break;
  //   case "England":
  //     console.log("England")
  //     break;
  //   case "Newzeland":
  //     console.log("NewZeland")
  //     break;
  //   default:
  //     break

  // }

  // While loop

  // var num = 0
  //  while(num<10){
  //    console.log(num)
  //    num++
  //  }

  // forLoop

  // for (var num = 0; num <= 20; num++){
  //   console.log(num)
  // }

  // for (var num = 0; num <= 10; num++) {
  //   var tableof = 2;
  //   console.log(tableof + "*" + num + "=" + tableof * num);
  // }

  // functions

  // function sum(a, b) {
  //   var total = a + b
  // console.log(total)
  // }

  // sum(10, 20)

  // function sum1(c, d) {
  //   var total = c + d
  //   console.log(total)
  // }
  // sum1(10, 20)

  // function sum(a,b) {
  //   return a+b
  // }
  // console.log(sum(10,15))

  // Template Literal Es6

  // for (let num = 0; num <= 10; num++){
  //   let tabOf = 5;
  //   console.log(`${tabOf} * ${num} = ${tabOf*num}`)

  // }

  // Default Parameters

  // function mult(a, c=10) {
  //   return a*c
  // }
  // console.log(mult(5))

  // Arrays

  // var myFriends = ["Suraj", "Neeraj", "Ashish", "Aditya", 10, 20, 30]
  // console.log(myFriends[2])
  // console.log(myFriends.length)

  // var myFriends = ["Suraj", "Neeraj", "Ashish", "Aditya"]

  // for (var i = 0; i < myFriends.length; i++){
  //   console.log(myFriends[i])
  // }

  // For in Loop ES6 = Gives index value

  // var myFriends = ["Suraj", "Neeraj", "Ashish", "Aditya"]

  // for (let guys in myFriends) {
  //   console.log(guys)
  // }

  // For of Loop ES6 = Gives string valuse

  // for (let guyss of myFriends) {
  //   console.log(guyss)
  // }

  // Searchig and filter in aaray
  // includes

  // var myFriends = ["Suraj", "Neeraj", "Ashish", "Aditya"]
  // console.log(myFriends.includes("Neeraj"))

  // filter

  // var myList = [100, 200, 300, 400, 500,600, 700, 800, 900, 1000]
  // const mytag = myList.filter((ele) => {
  //   return ele < 400;
  // })
  // console.log(mytag)

  // // Sorting the array

  // var letters = ["D", "E", "C", "A", "B"]
  // console.log(letters.sort())

  // let numbers = [2, 6, 4, 7, 1, 5, 3]
  // console.log(numbers.sort())

  // CRUD

  // var letters = ["D", "E", "C", "A", "B"]
  // letters.push("G", "H")
  // console.log(letters)

  // let numbers = [2, 6, 4, 7, 1, 5, 3]
  // numbers.push(8, 9, 10)
  // console.log(numbers)

  // map method
  // const friends = ["Suraj", "Neeraj", "Aditya"]

  // const mapp = friends.map((Ele) => {
  //   return Ele
  // })
  // console.log(mapp)

  // const arr = [25, 36, 49, 64, 81]
  // let arrSqr = arr.map((ele) => {
  //   return Math.sqrt(ele)
  // })
  // console.log(arrSqr)

  // let currDate = new Date();
  // console.log(currDate.toLocaleString());
  // console.log(currDate.getDate());
  // console.log(currDate.getFullYear());
  // console.log(currDate.getDay());'

  // events

  // onclick
  // onchange
  // onsubmit
  // etc

  // timebased Events

  // setTimeout
  // clearTimeout
  // setInterval
  // clearInterval

  // Es6 Destructuring

  // const myBiodata = ["Suraj", "Yadav", 21]
  // let myName = myBiodata[0]
  // let myLastname = myBiodata[1]
  // let myAge = myBiodata[2]

  // console.log(myName)

  // Array Destructuring

  // let [myName, myLastname, myAge] = myBiodata
  // console.log(myAge)

  // Object Destructuring
  // const myData = {
  //   myName: "Suraj",
  //   myLName: "Yadav",
  //   myAgee:21
  // }

  // Object Properties

  // let myName = "Suraj"
  // let myAge = 21

  // let myData ={myName,myAge}
  // console.log(myData)

  // spread Operators

  // const color = ["green", "yellow", "blue"]
  // const colors = ["green", "yellow", "blue", "white", "black", "geay"]

  // const myFavcolors = [ "voilet"]
  // console.log(myFavcolors)

  // const person = { name: "Suraj", age: 21 }
  // const person1 = { name: "Neeraj", age: 19 }
  // const persons = {...person}
  // console.log(persons)

  // sync and async

  // sync

  // const fun1 = () => {
  //   console.log("Function 1");
  // };

  // const fun2 = () => {
  //   console.log("Functio 2");
  //   fun1();
  //   console.log("Functoin 2 again");
  // };

  // fun2();

  // var myObject = { key1: "Suraj", key2: true, key3: 5 }
  // var objectInString = JSON.stringify(myObject)
  // console.log(objectInString)
