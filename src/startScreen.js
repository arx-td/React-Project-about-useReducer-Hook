import { type } from "@testing-library/user-event/dist/type";

function startScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} Questions to test your react mistery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start`" })}>
        Let's Start
      </button>
    </div>
  );
}

export default startScreen;
