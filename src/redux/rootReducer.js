import { combineReducers } from "redux";
import otherReducer from "./otherReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
  other: otherReducer,
});

export default rootReducer;
