import { useState } from "react";

const App = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInput] = useState("");
  const [id, setId] = useState(0);
  const [locked, setLocked] = useState(false);
  return (
    <>
      Locked ?
      <input
        type="checkbox"
        value={locked}
        onChange={() => setLocked(!locked)}
      />
      <br />
      <input value={inputValue} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          if (!locked) {
            setTodo([...todos, { id, message: inputValue }]);
            setInput("");
            setId(id + 1);
          }
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
              if (!locked) {
                setTodo(todos.filter((el) => el.id !== todo.id));
              }
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
