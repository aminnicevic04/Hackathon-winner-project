"use client";
import React, { useState } from "react";
import Quiz from "../../Componentse/quiz/Quiz";
import Rules from "../../Componentse/quiz/Rules";

const QuizPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  function handleStartQuiz() {
    setShowQuiz(true);
  }

  return (
    <div className="grid place-items-center h-full w-full min-h-screen mt-36">
      {showQuiz ? <Quiz /> : <Rules onStart={handleStartQuiz} />}
    </div>
  );
};

export default QuizPage;
