import { ActionTypes } from "./../types";
import { Action } from "./../actions";

interface GalleryState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const galleryReducer = (
  state: GalleryState = initialState,
  action: Action
): GalleryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_IMAGES_REQUEST:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionTypes.SEARCH_IMAGES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_IMAGES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default galleryReducer;
