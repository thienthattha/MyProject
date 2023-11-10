import { combineEpics } from "redux-observable";
import {
  dataToDoListEpic,
  addItemToDoListEpic,
  deleteToDoListEpic,
  doneToDoListEpic,
  saveToDoListEpic,
} from "./toDoList";

export const rootEpic = combineEpics(
  dataToDoListEpic,
  addItemToDoListEpic,
  deleteToDoListEpic,
  doneToDoListEpic,
  saveToDoListEpic
);
