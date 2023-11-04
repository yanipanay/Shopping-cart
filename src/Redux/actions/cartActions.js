import { ADD, REMOVE, RESET } from "./actionTypes";

export const add = (prod) => {
  return {
    type: ADD,
    payload: prod,
  };
};

export const remove = (prod) => {
  return {
    type: REMOVE,
    payload: prod,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
