import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("oldState", state);
  console.log("action", action);

  switch (action.type) {
    case "new input":
      if (state.locked) {
        console.log("input is locked, no update");
        return state;
      } else {
        const newState = {
          ...state,
          inputValue: action.payload,
        };
        console.log("newState", newState);
        return newState;
      }

    case "delete post":
      if (state.locked) {
        console.log("state is locked, no update");
        return state;
      } else {
        const newState = {
          ...state,
          todos: state.todos.filter((el) => el.id !== action.payload),
        };
        console.log("newState", newState);
        return newState;
      }

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
      <input
        value={state.inputValue}
        onChange={(e) => {
          dispatch({ type: "new input", payload: e.target.value });
        }}
      />
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
          <button
            onClick={() => dispatch({ type: "delete post", payload: todo.id })}
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
