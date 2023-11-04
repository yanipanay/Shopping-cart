import { ADD, REMOVE, RESET } from "../actions/actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD) {
    console.log("add", state);
    let prod = action.payload;
    for (let i = 0; i < state.length; i++) {
      if (state[i].id == prod.id) return state;
    }
    prod["isInCart"] = true;
    return [...state, prod];
  } else if (action.type == REMOVE) {
    console.log("remove");
    return state.filter((product) => {
      let prod = action.payload;
      if (product.id == prod.id) return false;
      else return true;
    });
  } else if (action.type == RESET) {
    console.log("reset");
    return initialState;
  } else return state;
};

export default cartReducer;
