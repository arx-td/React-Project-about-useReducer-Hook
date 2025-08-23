function startScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} Questions to test your react mistery</h3>
      <button className="btn">Let's Start</button>
    </div>
  );
}

export default startScreen;
