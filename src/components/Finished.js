function Finished({ points, maxPossibelPoints, highScore }) {
  const percentage = maxPossibelPoints ? (points / maxPossibelPoints) * 100 : 0; // avoid division by zero

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossibelPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
    </>
  );
}

export default Finished;
