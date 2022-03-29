import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "./Actions/IceCreamAction";
// import { connect } from "react-redux"

// connect can conenct the multiple function in the same page in export line
// instead of connect we can use the hooks like useDispatch and useSelector

function HookIceCreamContainer() {
  const dispatch = useDispatch();

  const numOfIcecreams = useSelector((state) => state.numOfIcecreams);
  return (
    <>
      <div>
        <h2>Number Of Cakes - {numOfIcecreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
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

export default HookIceCreamContainer;
