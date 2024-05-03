"use client";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "./questions";

import { useState, useRef } from "react";

export default function Question({ onSelectAnswer, onSkipAnswer, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 5000;

  if (answer.selectedAnswer) timer = 500;

  if (answer.isCorrect !== null) timer = 1000;

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1000);
    }, 500);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null)
    answerState = answer.isCorrect ? "correct" : "wrong";
  else if (answer.selectedAnswer) answerState = "answered";

  return (
    <div id="question">
      <button
        disabled={answerState !== ""}
        onClick={onSelectAnswer.bind(null, null)}
        id="skip-question"
      >
        SKIP
      </button>
      <QuestionTimer
        key={timer}
        timer={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
