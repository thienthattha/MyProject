import { ofType } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { of, from } from "rxjs";
import axios from "axios";
import * as actionTypes from "../../actions/toDoList/toDoListType";

import {
  dataToDoListSuccess,
  dataToDoListFailure,
  addItemToDoListSuccess,
  addItemToDoListFailure,
  deleteItemToDoListFailure,
  deleteItemToDoListSuccess,
  doneItemToDoListSuccess,
  doneItemToDoListFailure,
  saveItemToDoListSuccess,
  saveItemToDoListFailure,
  removeAllDoneSuccess,
  removeAllDoneFailure,
} from "../../actions/toDoList";
import { API_TO_DO_LIST } from "./config";

export const dataToDoListEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DATA_TO_DO_LIST_START),
    mergeMap((action) =>
      fetch(API_TO_DO_LIST, {
        method: "GET",
        body: JSON.stringify(action.payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("");
          }
          return response.json();
        })
        .then((data) => dataToDoListSuccess(data))
        .catch((error) => dataToDoListFailure(error))
    )
  );

export const addItemToDoListEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_ITEM_TO_DO_LIST_START),
    mergeMap(async (action) => {
      const param = {
        name: action?.payload?.name,
        isChecked: action?.payload?.isChecked,
      };

      try {
        const response = await axios.post(API_TO_DO_LIST, param);
        const data = response.data;
        return addItemToDoListSuccess(data);
      } catch (error) {
        return of(addItemToDoListFailure(error));
      }
    })
  );

export const deleteToDoListEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DELETE_ITEM_TO_DO_LIST_START),
    mergeMap((action) => {
      const idDel = action.payload.index;
      const urlDel = `${API_TO_DO_LIST}/${idDel}`;
      return from(axios.delete(urlDel)).pipe(
        mergeMap((response) => {
          const data = response.data;
          return of(deleteItemToDoListSuccess(data));
        }),
        catchError((error) => {
          return of(deleteItemToDoListFailure(error));
        })
      );
    })
  );

export const doneToDoListEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DONE_ITEM_TO_DO_LIST_START),
    mergeMap((action) => {
      const idChange = action.payload.index;
      const urlChange = `${API_TO_DO_LIST}/${idChange}`;

      const param = {
        isChecked: action.payload.isChecked,
      };

      return from(axios.put(urlChange, param)).pipe(
        mergeMap((response) => {
          const data = response.data;
          return of(doneItemToDoListSuccess(data));
        }),
        catchError((error) => {
          return of(doneItemToDoListFailure(error));
        })
      );
    })
  );

export const saveToDoListEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.SAVE_ITEM_TO_DO_LIST_START),
    mergeMap((action) => {
      const idSave = action.payload.index;
      const urlSave = `${API_TO_DO_LIST}/${idSave}`;

      const param = {
        name: action.payload.name,
      };

      return from(axios.put(urlSave, param)).pipe(
        mergeMap((response) => {
          const data = response.data;
          return of(saveItemToDoListSuccess(data));
        }),
        catchError((error) => {
          return of(saveItemToDoListFailure(error));
        })
      );
    })
  );
