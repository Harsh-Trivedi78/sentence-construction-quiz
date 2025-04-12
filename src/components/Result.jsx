import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const totalQuestions = 2;
    const correctAnswers = state?.coinCount || 0;
    const maxMarks = totalQuestions * 10;

    const calculatedScore = correctAnswers * (maxMarks / totalQuestions);
    setScore(calculatedScore);

    let progress = 0;
    const interval = setInterval(() => {
      if (progress < calculatedScore) {
        progress += 1;
        setTimer(progress);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [state?.coinCount]);

  const progressBarWidth = Math.min((score / (2 * 10)) * 100, 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="backdrop-blur-lg bg-white/70 p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-xl transition-all duration-500 hover:shadow-indigo-300">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Results
        </h1>

        <p className="text-lg text-gray-600 font-medium mb-6 text-center leading-relaxed">
          While you correctly formed several sentences, there are a couple of
          areas where improvement is needed. Pay close attention to sentence
          structure and word placement to ensure clarity and correctness.
        </p>

        <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
          <div
            className="bg-green-600 h-full rounded-full"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>

        <p className="text-3xl font-semibold text-green-600 text-center mb-6">
          {Math.round(timer)} / 100
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
