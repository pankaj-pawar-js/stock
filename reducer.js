import { combineReducers } from "redux";

const API_DATA = [
  { id: 1, name: "pp" },
  { id: 2, name: "aa" },
  { id: 3, name: "bb" },
];

export const INITIAL_STATE = {
  currencyList: [],
  showLoader: true
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CURRENCY_LIST": {
      return { ...state, currencyList: action.payload };
    }
    case "LOADING" : {
        return {...state, showLoader: action.payload};
    }
    default:
      return state;
  }
};

export default combineReducers({
  currencyReducer
});
