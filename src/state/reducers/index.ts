import { combineReducers } from "redux";
import galleryReducer from "./galleryReducer";

const rootReducer = combineReducers({
  images: galleryReducer,
});

export default rootReducer;
