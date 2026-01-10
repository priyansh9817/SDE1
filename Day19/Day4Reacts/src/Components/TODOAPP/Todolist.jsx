import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, "Learn React"]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <>
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoApp;