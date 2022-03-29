import React from "react";
import buyCake from "./Actions/CakeAction";
import { connect } from "react-redux"

// connect can conenct the multiple function in the same page in export line

function CakeContainer(props) {
  return (
    <>
      <div>
              <h2>Number Of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    buyCake: () => {dispatch(buyCake())
     
    },
  };
};
export default connect(mapDispatchProps,mapStateToProps)(CakeContainer);
