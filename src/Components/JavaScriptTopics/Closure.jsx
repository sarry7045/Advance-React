const closure = () => {
  let a = 10;
  console.log(a);
  const closure1 = () => {
    let b = 20;
    console.log(b);
  };
  closure1();
};
closure();

// defined function inside the function but to print the second function we need to call the second f
//   unction insdide the first function. - closure
