import { ar } from "date-fns/locale";
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
