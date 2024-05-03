import {} from "react";
import QUESTIONS from "./questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  return (
    <div id="summary">
      <h2>{correctPercentage > 50 ? "You passed!" : "You failed..."}</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Answered correcltly</span>
        </p>
        <p>
          <span className="number">
            {100 - skippedPercentage - correctPercentage}%
          </span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0])
            cssClass += " correct";
          else cssClass += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
