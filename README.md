Sentence Construction Quiz
Overview
This is a React-based quiz application that focuses on sentence construction. Users are presented with a set of words and are required to arrange them into a meaningful sentence. The app includes a timer for each question and a scoring system based on correct answers. After completing the quiz, users are shown their results along with a progress bar visualizing their score.

The project uses modern web design techniques, including glassmorphism, smooth animations, and interactive components. The UI is built using Tailwind CSS, with icons provided by Lucide.

Features
Sentence Construction Quiz: Arrange words into the correct order to form meaningful sentences.

Timer: Each question has a 30-second timer, and users are automatically moved to the next question when time runs out.

Score Tracking: Users earn coins for correct answers, and their final score is calculated based on their performance.

Results Page: A detailed results page that shows the user's score and includes a progress bar that visualizes their performance.

Responsive Design: The application is designed to be fully responsive and provides a great user experience on both mobile and desktop devices.

Smooth Animations: Animated transitions between different pages and UI elements enhance user experience.

Interactive UI: Utilizes modern interactive components like buttons, input fields, and timers to keep users engaged.

Technologies Used
React: A JavaScript library for building user interfaces.

React Router: For navigation between pages (e.g., navigating from the landing page to the quiz page and from the quiz to the result page).

Tailwind CSS: A utility-first CSS framework that allows for fast and flexible styling.

Lucide Icons: A set of clean, minimalistic icons used in the UI.

ShadCN: For enhanced UI components and modern design elements.

React Hooks: For managing state and side effects (e.g., useState, useEffect).

Setup
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 16.0 or higher)

npm (or yarn)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/sentence-construction-quiz.git
Navigate to the project directory:

bash
Copy
Edit
cd sentence-construction-quiz
Install the dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.

Usage
Landing Page: The landing page welcomes the user with a brief explanation of the game. It shows details such as the number of questions, time per question, and current coin count. A Start button begins the quiz.

Quiz Page: The user is presented with a set of words and must arrange them in the correct order to form a sentence. Each question has a 30-second timer. Users can submit their answer once they have arranged the words. Upon submission, the system provides feedback on whether the answer was correct and moves to the next question.

Results Page: After completing the quiz, users are shown their score and a progress bar indicating their performance. The final score is calculated based on the number of correct answers.

Design and Styling
Glassmorphism
Glassmorphism is applied to the background of the app’s components, using a frosted glass effect that includes a blur and semi-transparent background. This design trend enhances the app's visual appeal and modernizes the UI.

Tailwind CSS
Tailwind CSS is used extensively for utility-first styling, providing responsive, customizable design elements across the app. It ensures a clean and consistent UI across all devices.

Animations and Transitions
Smooth transitions and animations are applied to various components to enhance user interaction. This includes hover effects, transitions between pages, and progress bars.

Contributions
If you'd like to contribute to the project, feel free to fork the repository and create a pull request. We welcome contributions to improve the functionality, design, and performance of the application.
