import * as actionTypes from "./toDoListType";

export const dataToDoListStart = () => ({
  type: actionTypes.DATA_TO_DO_LIST_START,
});
export const dataToDoListSuccess = (data) => ({
  type: actionTypes.DATA_TO_DO_LIST_SUCCESS,
  payload: data,
});
export const dataToDoListFailure = (error) => ({
  type: actionTypes.DATA_TO_DO_LIST_FAILURE,
  payload: error,
});

export const addItemToDoListStart = (data) => ({
  type: actionTypes.ADD_ITEM_TO_DO_LIST_START,
  payload: data,
});
export const addItemToDoListSuccess = (data) => ({
  type: actionTypes.ADD_ITEM_TO_DO_LIST_SUCCESS,
  payload: data,
});
export const addItemToDoListFailure = (error) => ({
  type: actionTypes.ADD_ITEM_TO_DO_LIST_FAILURE,
  payload: error,
});

export const deleteItemToDoListStart = (index) => ({
  type: actionTypes.DELETE_ITEM_TO_DO_LIST_START,
  payload: index,
});
export const deleteItemToDoListSuccess = (index) => ({
  type: actionTypes.DELETE_ITEM_TO_DO_LIST_SUCCESS,
  payload: index,
});
export const deleteItemToDoListFailure = (error) => ({
  type: actionTypes.DELETE_ITEM_TO_DO_LIST_FAILURE,
  payload: error,
});

export const doneItemToDoListStart = (data) => ({
  type: actionTypes.DONE_ITEM_TO_DO_LIST_START,
  payload: data,
});
export const doneItemToDoListSuccess = (data) => ({
  type: actionTypes.DONE_ITEM_TO_DO_LIST_SUCCESS,
  payload: data,
});
export const doneItemToDoListFailure = (error) => ({
  type: actionTypes.DONE_ITEM_TO_DO_LIST_FAILURE,
  payload: error,
});

export const saveItemToDoListStart = (data) => ({
  type: actionTypes.SAVE_ITEM_TO_DO_LIST_START,
  payload: data,
});
export const saveItemToDoListSuccess = (data) => ({
  type: actionTypes.SAVE_ITEM_TO_DO_LIST_SUCCESS,
  payload: data,
});
export const saveItemToDoListFailure = (error) => ({
  type: actionTypes.SAVE_ITEM_TO_DO_LIST_FAILURE,
  payload: error,
});
