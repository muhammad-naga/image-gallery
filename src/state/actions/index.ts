import { ActionTypes } from "./../types";

interface SearchImagesRequestAction {
  type: ActionTypes.SEARCH_IMAGES_REQUEST;
}
interface SearchImagesSuccessAction {
  type: ActionTypes.SEARCH_IMAGES_SUCCESS;
  payload: object[];
}
interface SearchImagesErrorAction {
  type: ActionTypes.SEARCH_IMAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchImagesRequestAction
  | SearchImagesSuccessAction
  | SearchImagesErrorAction;
