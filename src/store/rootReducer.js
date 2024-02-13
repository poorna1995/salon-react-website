import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// REDUCERS
import userSlice from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userSlice,
});

const configStorage = {
  key: "root",
  storage,
  timeout: null,
  whitelist: ["user"],
};

export default persistReducer(configStorage, rootReducer);
