import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { Action } from "./../actions";

export const searchImagesCreator = (text: string, page: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_IMAGES_REQUEST,
    });

    try {
      const CLIENT_ID = "5ekMw6SLOyeT2Yc1v2SGRn7FFpcvhygf-BZQV8zafMY";
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&page=2&per_page=30&query=${text}`
      );

      const { results } = data;

      const payload = results.map((item: any) => item);

      dispatch({
        type: ActionTypes.SEARCH_IMAGES_SUCCESS,
        payload,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SEARCH_IMAGES_ERROR,
        payload: err.message,
      });
    }
  };
};
