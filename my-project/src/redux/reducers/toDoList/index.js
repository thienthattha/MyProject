import {
  DATA_TO_DO_LIST_START,
  DATA_TO_DO_LIST_SUCCESS,
  DATA_TO_DO_LIST_FAILURE,
  ADD_ITEM_TO_DO_LIST_START,
  ADD_ITEM_TO_DO_LIST_SUCCESS,
  ADD_ITEM_TO_DO_LIST_FAILURE,
  DELETE_ITEM_TO_DO_LIST_START,
  DELETE_ITEM_TO_DO_LIST_SUCCESS,
  DELETE_ITEM_TO_DO_LIST_FAILURE,
  DONE_ITEM_TO_DO_LIST_START,
  DONE_ITEM_TO_DO_LIST_SUCCESS,
  DONE_ITEM_TO_DO_LIST_FAILURE,
  SAVE_ITEM_TO_DO_LIST_START,
  SAVE_ITEM_TO_DO_LIST_SUCCESS,
  SAVE_ITEM_TO_DO_LIST_FAILURE,
} from "../../actions/toDoList/toDoListType";

const initState = {
  dataToDoList: null,
  isSuccess: false,
  error: null,
  isLoading: false,
};

export const toDoListReducer = (state = initState, action) => {
  switch (action.type) {
    // Data
    case DATA_TO_DO_LIST_START:
      return {
        isSuccess: false,
      };
    case DATA_TO_DO_LIST_SUCCESS:
      return {
        isSuccess: true,
        dataToDoList: action.payload,
      };
    case DATA_TO_DO_LIST_FAILURE:
      return {
        isSuccess: false,
        error: action.payload,
      };

    // Add
    case ADD_ITEM_TO_DO_LIST_START:
      return {
        ...state,
        isSuccess: false,
      };
    case ADD_ITEM_TO_DO_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        dataToDoList: [...state.dataToDoList, action.payload],
      };
    case ADD_ITEM_TO_DO_LIST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        error: action.payload,
      };

    // Delete
    case DELETE_ITEM_TO_DO_LIST_START:
      return {
        ...state,
        isSuccess: false,
      };
    case DELETE_ITEM_TO_DO_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        dataToDoList: [
          ...state.dataToDoList.filter((item) => item.id !== action.payload.id),
        ],
      };
    case DELETE_ITEM_TO_DO_LIST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        error: action.payload,
      };

    // Done
    case DONE_ITEM_TO_DO_LIST_START:
      return {
        ...state,
        isSuccess: false,
      };
    case DONE_ITEM_TO_DO_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        dataToDoList: [
          ...state.dataToDoList.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, isChecked: action.payload.isChecked };
            } else {
              return item;
            }
          }),
        ],
      };
    case DONE_ITEM_TO_DO_LIST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        error: action.payload,
      };

    // Save
    case SAVE_ITEM_TO_DO_LIST_START:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
      };
    case SAVE_ITEM_TO_DO_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: true,
        dataToDoList: [
          ...state.dataToDoList.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, name: action.payload.name };
            } else {
              return item;
            }
          }),
        ],
      };
    case SAVE_ITEM_TO_DO_LIST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
