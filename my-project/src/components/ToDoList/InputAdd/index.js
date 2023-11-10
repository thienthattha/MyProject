import Button from "../Button";

function InputAdd({
  handleAdd,
  setInputEnter,
  inputEnter,
  inputRef,
  isInput,
  onDataLayout,
}) {
  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="to-do-list__input">
      <input
        className="input-to-do-list"
        type="text"
        name=""
        id=""
        ref={inputRef}
        value={inputEnter}
        placeholder={onDataLayout?.["Lable add to do"]}
        onChange={(evt) => {
          setInputEnter(evt.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Button className="btn" variant="primary" size="lg" onClick={handleAdd}>
        {onDataLayout?.["Button add"]}
      </Button>
      {!isInput && (
        <span className="error">{onDataLayout?.["Error message"]}</span>
      )}
    </div>
  );
}

export default InputAdd;
