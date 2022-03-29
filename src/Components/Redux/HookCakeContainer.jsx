import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "./Actions/CakeAction";
// import { connect } from "react-redux"

// connect can conenct the multiple function in the same page in export line
// instead of connect we can use the hooks like useDispatch and useSelector

function HookCakeContainer() {
  const dispatch = useDispatch();

  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <>
      <div>
        <h2>Number Of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchProps = (dispatch) => {
//   return {
//     buyCake: () => {dispatch(buyCake())

//     },
//   };
// };
// export default connect(mapDispatchProps,mapStateToProps)(HookCakeContainer);

export default HookCakeContainer;
