import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import otherReducer from "./otherReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
  other: otherReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["bookings"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
