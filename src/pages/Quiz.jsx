import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TimerReset, LogOut } from "lucide-react";
import Timer from "../components/Timer";
import questionData from "../data/questions.json";

const Quiz = () => {
  const [questions] = useState(questionData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [coinCount, setCoinCount] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    if (selectedOptions.length >= 4 || selectedOptions.includes(option)) return;
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleSubmitClick = () => {
    const isCorrect =
      JSON.stringify(selectedOptions) ===
      JSON.stringify(currentQuestion.correctAnswer);
    if (isCorrect) {
      setCoinCount((prev) => prev + 1);
    }

    setTimeout(() => {
      goToNext();
    }, 1000);
  };

  const handleTimeUp = () => {
    if (currentIndex === questions.length - 1) {
      setIsTimeUp(true);
      setTimeout(() => {
        navigate("/result", { state: { coinCount } });
      }, 2000);
    } else {
      goToNext();
    }
  };

  const goToNext = () => {
    setSelectedOptions([]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/result", { state: { coinCount } });
    }
  };

  const getFormattedQuestion = () => {
    const blanks = currentQuestion.question.split("_____________");
    const filled = selectedOptions.concat(
      Array(4 - selectedOptions.length).fill("______")
    );

    return blanks
      .map((part, index) =>
        index < filled.length ? part + ` ${filled[index]} ` : part
      )
      .join("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6 flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/70 p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-3xl transition-all duration-500 hover:shadow-indigo-300">
     
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Sentence Quiz</h2>
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-red-500 hover:text-red-600 transition duration-300"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Quit
          </button>
        </div>

       
        <Timer
          key={currentIndex}
          duration={30}
          onComplete={handleTimeUp}
        />

      
        <div className="mt-8 w-full text-center">
          <p className="text-xl font-medium text-gray-800 mb-6 leading-relaxed">
            {getFormattedQuestion()}
          </p>

         
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() =>
                  selectedOptions.includes(opt)
                    ? setSelectedOptions(
                        selectedOptions.filter((item) => item !== opt)
                      )
                    : handleOptionClick(opt)
                }
                className={`px-6 py-3 border rounded-full transition transform hover:scale-105 ${
                  selectedOptions.includes(opt)
                    ? "bg-indigo-600 text-white"
                    : "border-gray-300 text-gray-700 hover:border-indigo-500"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {selectedOptions.length === 4 && (
          <button
            onClick={handleSubmitClick}
            className="mt-6 flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        )}

        
        <div className="mt-6">
        <button
  onClick={goToNext}
  className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
>
  <TimerReset className="w-4 h-4 mr-2" />
  Skip
</button>

        </div>

        {/* Time Up Message */}
        {isTimeUp && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-red-500 animate-pulse">
            Time's Up!
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
