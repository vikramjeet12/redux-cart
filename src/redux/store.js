import { legacy_createStore } from "redux";
import { rootReducer } from "./reducers/RootReducer";

export const store = legacy_createStore(rootReducer);