import React from "react";
import { TextCursorInput } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SentenceConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
      <div className="backdrop-blur-lg bg-white/70 p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-xl transition-all duration-500 hover:shadow-indigo-300">
        
        <TextCursorInput className="w-14 h-14 text-indigo-600 mb-6 mx-auto block animate-pulse" />

       
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Sentence Construction
        </h1>
        <p className="text-center text-gray-600 font-medium mb-8 leading-relaxed">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>

        
        <div className="flex justify-around text-center mb-10">
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Time Per Question
            </p>
            <p className="text-base text-gray-800 font-bold">30 sec</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Total Questions
            </p>
            <p className="text-base text-gray-800 font-bold">10</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">Coins</p>
            <p className="text-base text-gray-800 font-bold">
              <span className="text-yellow-500 text-lg mr-1">●</span>0
            </p>
          </div>
        </div>

        
        <div className="flex justify-center space-x-4">
          {/* <button
            onClick={() => navigate("/")}
            className="px-6 py-2 border border-indigo-500 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            Back
          </button> */}
          <button
            onClick={() => navigate("/quiz")}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentenceConstruction;
