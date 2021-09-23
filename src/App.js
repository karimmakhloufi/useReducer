import { useState } from "react";

const App = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInput] = useState("");
  return (
    <>
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setTodo([...todos, inputValue]);
          setInput("");
        }}
      >
        add
      </button>
      <br />
      {todos.map((todo) => (
        <>
          <span>{todo}</span>
          <button>Delete</button>
          <br />
        </>
      ))}
    </>
  );
};

export default App;
