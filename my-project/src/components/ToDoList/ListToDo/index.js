import Button from "../Button";

function ListToDo({
  handleEdit,
  handleDone,
  handleDelete,
  handleSave,
  handleCancel,
  dataToDoList,
  setInputChange,
  inputChange,
  onDataLayout,
}) {
  return dataToDoList?.length > 0 ? (
    <div className="to-do-list__list">
      <div className="to-do-list__list__head">
        <h4 className="title">{onDataLayout?.["Lable task"]}</h4>
        <h4 className="title">{onDataLayout?.["Lable action"]}</h4>
      </div>
      <div className="to-do-list__list__body">
        {dataToDoList.map((item, index) => {
          return (
            <div key={index} index={item.id} className="item">
              <div className="item__info">
                <input
                  className="input-to-do-list item-ntn-none"
                  type="text"
                  name=""
                  id=""
                  value={inputChange}
                  onChange={(evt) => {
                    setInputChange(evt.target.value);
                  }}
                />
                <span className={item.isChecked ? "item__info__done" : ""}>
                  {item.name}
                </span>
              </div>
              <div className="item__btn item__btn--box1">
                <Button
                  className="btn"
                  variant="outline-primary"
                  onClick={handleEdit}
                >
                  {onDataLayout?.["Button edit"]}
                </Button>
                {!item.isChecked && (
                  <Button
                    className="btn"
                    variant="outline-red"
                    onClick={handleDone}
                  >
                    {onDataLayout?.["Button done"]}
                  </Button>
                )}
                <Button
                  className="btn"
                  variant="outline-black"
                  onClick={handleDelete}
                >
                  {onDataLayout?.["Button delete"]}
                </Button>
              </div>
              <div className="item__btn item__btn--box2 item-ntn-none">
                <Button
                  className="btn"
                  variant="outline-primary"
                  onClick={handleSave}
                >
                  {onDataLayout?.["Button save"]}
                </Button>
                <Button
                  className="btn"
                  variant="outline-black"
                  onClick={handleCancel}
                >
                  {onDataLayout?.["Button cancel"]}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="to-do-list__notification">
      {onDataLayout?.["Mesage nothing"]}
    </div>
  );
}

export default ListToDo;
