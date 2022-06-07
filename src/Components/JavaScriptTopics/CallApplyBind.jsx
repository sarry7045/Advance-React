import React from "react";

const CallApplyBind = () => {
  let printFulname = function (homwtown, state) {
    console.log(
      this.firstname + "" + this.lastname + "" + homwtown + "" + state
    );
  };

  let names = {
    firstname: "Suraj",
    lastname: "Yadav",
  };
  printFulname.call(names, "Mumbai", "Maharashtra");
  printFulname.apply(names, ["Mumba", "Maha"]);

  let printNames = function () {
    console.log(this.fname + "" + this.lname + "");
  };

  let name = {
    fname: "Virat",
    lname: "Kohli",
  };

  printNames.call(name);
  return <div>CallApplyBind</div>;
};

export default CallApplyBind;
