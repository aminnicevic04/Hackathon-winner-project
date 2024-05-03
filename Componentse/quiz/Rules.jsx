export default function Rules({ onStart }) {
  return (
    <main className="bg-white rounded-xl px-8 text-black flex flex-col gap-3 w-1/2">
      <h1 className="text-4xl uppercase font-extrabold">
        Welcome to the quiz!
      </h1>
      <p>
        This quiz will be about Maximillian Swartzmuller's "React from beginner
        to master" course!
      </p>

      <h2 className="font-bold text-2xl">Rules:</h2>
      <ul className="flex flex-col gap-2">
        <li>Every question is 5 seconds.</li>
        <li>
          If 15 seconds expires, the question is skipped and therefore deemed
          incorrect
        </li>
        <li>At the end of the quiz We will calculate your score</li>
        <li>
          To pass the Quiz and therefore the Course, you need to give a correct
          answer to more than 50% of the questions!
        </li>
      </ul>

      <button
        onClick={onStart}
        className="bg-purple-600 p-3  rounded-lg w-60 text-white"
      >
        Kreni
      </button>
    </main>
  );
}
