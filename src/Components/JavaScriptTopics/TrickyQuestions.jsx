import React from "react";

const TrickyQuestions = () => {
  // console.log(2 +"2") - 22
  // console.log(2-"2") - 0

  // let nums = [1, 2, , 2, 3]
  // remove duplicate value
  // const removeDupli = [...new Set(nums)]

  // console.log(5 < 6 < 7);  true
  // console.log(7 > 6 > 5); false

  // const arry = [1, 2, 15, 30, 5, 45, 7]
  // arry.sort()
  // console.log(arry.sort(() => {
  //     return a<b
  // }))

  // const x = [1, 2, 3] + [4, 5, 6]
  // console.log(x) - 1,2,34,5,6,7
  // const x = [...[1, 2, 3], ...[4, 5, 6]]
  // console.log(x) - 1,2,3,4,5,6,7

  // const arr = [1, 1, 0, 0, 0, 0, 1, 1]
  // const findOne = arr.filter((val) => {
  //   return val === 1
  // })
  // console.log(findOne.length)

  // console.log("1" + 1)
  // console.log(1 + "1")
  // both prints 11

  // Reverse
  //   const str ="Hello Suraj"
  // const strr = str.split("")
  // console.log(strr.reverse().join(""))

  // const student  = {name:"suraj", lastname:"Yadav"}
  // const find = Object.keys(student)
  // console.log(find)

  // const str = "Suraj Yadav"
  // console.log(str.replace("Suraj","Neeraj"))

  //   let myName ="Suraj Yadav"
  // let Channelname = myName
  // myName = "Sarry"
  // console.log(Channelname)
  // Suraj Yadav

  // const obj  = {name:"Surajj"}
  // const objj = obj
  // objj.name="Neeraj"
  // console.log(objj)
  // Neeraj

  // const findVomelorNot = () => {
  //   let char = "A";
  //   char = char.toLocaleLowerCase();
  //   if (
  //     char == "a" ||
  //     char == "e" ||
  //     char == "i" ||
  //     char == "o" ||
  //     char == "u"
  //   ) {
  //     console.log("Char is Vomel");
  //   } else {
  //     console.log("Char is Not Vomel");
  //   }
  // };
  // findVomelorNot();

  //   const arr =["Sueraj","Ajit","Amey","Bala"]
  // for( let element of arr){
  //     console.log(element)
  // }

  // const num = 10000;
  // let x = 0;
  // let y = 1;
  // let fn = x + y;
  // while (fn < num) {
  //   console.log(fn);
  //   fn = x + y;
  //   x = y;
  //   y = fn;
  // }

  //   const arr =[1,2,3,4,5]
  // const sum =arr.reduce((accum, curr)=>{
  //     return accum + curr
  // },20)
  //   console.log(sum)
  //   20 is initial value means 20 + array ka jitna total hoga woh

  //   const arr1 =[1,2,3,4,5]
  // const arr2 =[3,4,5,6,7]
  // const intersectionarr = arr1.filter((value)=>{
  //     return arr2.includes(value)
  // })
  // const unionArr = [...new Set([...arr1,...arr2])]
  // console.log(unionArr)

  return <div>TrickyQuestions</div>;
};

export default TrickyQuestions;
