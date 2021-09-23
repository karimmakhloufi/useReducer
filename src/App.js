import { useState } from "react";

const App = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInput] = useState("");
  const [id, setId] = useState(0);
  return (
    <>
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setTodo([...todos, { id, message: inputValue }]);
          setInput("");
          setId(id + 1);
        }}
      >
        add
      </button>
      <br />
      {todos.map((todo) => (
        <>
          <span>{todo.message}</span>
          <span>{todo.id}</span>
          <button
            onClick={() => {
              setTodo(todos.filter((el) => el.id !== todo.id));
            }}
          >
            Delete
          </button>
          <br />
        </>
      ))}
    </>
  );
};

export default App;
