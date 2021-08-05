import {combineReducers} from "redux";

import {headerSlice} from './modules/Header/headerSlice';

export const rootReducer = combineReducers({
  header: headerSlice.reducer
});
