import "./ToDoList.scss";

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputAdd from "./InputAdd";
import ListToDo from "./ListToDo";
import Loading from "~/components/Loading";
import dataLayout from "./dataLayout";
import {
  dataToDoListStart,
  addItemToDoListStart,
  deleteItemToDoListStart,
  doneItemToDoListStart,
  saveItemToDoListStart,
} from "~/redux/actions/toDoList";

function ToDoList() {
  const [inputEnter, setInputEnter] = useState("");
  const [isInput, setInput] = useState(true);
  const [inputChange, setInputChange] = useState("");
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const dataToDoList = useSelector(
    (state) => state?.toDoListReducer?.dataToDoList
  );
  const isLoadings = useSelector((state) => state?.toDoListReducer?.isLoading);
  const isLoading = useSelector((state) => state?.toDoListReducer?.isSuccess);
  const inputRef = useRef(null);

  const handleAdd = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (!!inputEnter) {
      dispatch(addItemToDoListStart({ name: inputEnter, isChecked: false }));
      setInput(true);
    } else {
      setInput(false);
    }

    setInputEnter("");
  };

  const handleDone = (evt) => {
    const index = evt.target.closest(".item").getAttribute("index");
    dispatch(doneItemToDoListStart({ index: index, isChecked: true }));
  };

  const handleDelete = (evt) => {
    const index = evt.target.closest(".item").getAttribute("index");
    dispatch(deleteItemToDoListStart({ index: index }));
  };

  const handleEdit = (evt) => {
    const item = evt.target.closest(".item");
    item.querySelector(".item__btn--box1").classList.add("item-ntn-none");
    item.querySelector(".item__info span").classList.add("item-ntn-none");
    item.querySelector(".item__btn--box2").classList.remove("item-ntn-none");
    item.querySelector(".item__info input").classList.remove("item-ntn-none");
  };

  const handleCancel = (evt) => {
    const item = evt.target.closest(".item");
    item.querySelector(".item__btn--box2").classList.add("item-ntn-none");
    item.querySelector(".item__info input").classList.add("item-ntn-none");
    item.querySelector(".item__btn--box1").classList.remove("item-ntn-none");
    item.querySelector(".item__info span").classList.remove("item-ntn-none");
  };

  const handleSave = (evt) => {
    if (!!inputChange) {
      const index = evt.target.closest(".item").getAttribute("index");
      dispatch(saveItemToDoListStart({ index: index, name: inputChange }));
    }
    setItem(evt.target.closest(".item"));
  };

  useEffect(() => {
    dispatch(dataToDoListStart());
  }, []);

  useEffect(() => {
    if (isLoadings === true) {
      item.querySelector(".item__btn--box2").classList.add("item-ntn-none");
      item.querySelector(".item__info input").classList.add("item-ntn-none");
      item.querySelector(".item__btn--box1").classList.remove("item-ntn-none");
      item.querySelector(".item__info span").classList.remove("item-ntn-none");
      setInputChange("");
    }
  }, [isLoadings]);

  return (
    <div className="to-do-list">
      <div className="container">
        <div className="to-do-list__content">
          <h2 className="to-do-list__title">{dataLayout.Title}</h2>
          <InputAdd
            handleAdd={handleAdd}
            setInputEnter={setInputEnter}
            inputEnter={inputEnter}
            inputRef={inputRef}
            isInput={isInput}
            onDataLayout={dataLayout}
          />
          <ListToDo
            handleEdit={handleEdit}
            handleDone={handleDone}
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleCancel={handleCancel}
            dataToDoList={dataToDoList}
            setInputChange={setInputChange}
            inputChange={inputChange}
            onDataLayout={dataLayout}
          />
          {!isLoading && <Loading />}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
