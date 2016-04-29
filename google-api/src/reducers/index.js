"use strict";

import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import drives from "./drives"

const rootReducer = combineReducers({
  routing: routerReducer,
  drives
});

export default rootReducer;
