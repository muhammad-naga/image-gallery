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
        `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&page=${page}&query=${text}`
      );

      const results = data.map((item: any) => item);

      dispatch({
        type: ActionTypes.SEARCH_IMAGES_SUCCESS,
        payload: results,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SEARCH_IMAGES_ERROR,
        payload: err.message,
      });
    }
  };
};
