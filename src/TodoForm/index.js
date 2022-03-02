import React from "react";
import "./TodoForm.css";
const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea
        placeholder="hace la tarea"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          eliminar Todo
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir Todo
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
