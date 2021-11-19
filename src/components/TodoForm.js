import React from "react";

const TodoForm = ({ currentTodo, handleOnChangeInput, handleSubmit }) => {
  return (
    <form>
      <input
        type="text"
        focus="true"
        value={currentTodo}
        onChange={handleOnChangeInput}
        data-testid="input"
      />
      <button data-testid="createButton" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
