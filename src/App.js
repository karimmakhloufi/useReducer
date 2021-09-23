import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("oldState", state);
  console.log("action", action);

  switch (action.type) {
    case "new todo":
      if (state.locked) {
        console.log("state is locked, no update");
        return state;
      } else {
        const newState = {
          ...state,
          todos: [
            ...state.todos,
            { id: state.lastId + 1, message: state.inputValue },
          ],
          lastId: state.lastId + 1,
          inputValue: "",
        };
        console.log("newState", newState);
        return newState;
      }
    default:
      throw new Error();
  }
};

const initialState = {
  lastId: 0,
  locked: false,
  todos: [],
  inputValue: "Todo default message",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Locked ?
      <input type="checkbox" value={state.locked} />
      <br />
      <input value={state.inputValue} />
      <button
        onClick={() => {
          dispatch({ type: "new todo" });
        }}
      >
        add
      </button>
      <br />
      {state.todos.map((todo) => (
        <>
          <span>{todo.message}</span>
          <span>{todo.id}</span>
          <button>Delete</button>
          <br />
        </>
      ))}
    </>
  );
};

export default App;
