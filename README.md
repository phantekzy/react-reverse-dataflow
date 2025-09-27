# React Reverse Dataflow

A simple React project that demonstrates reverse data flow: a child component updates its parent’s state through props and the onChange event.

## Features
- Parent component (App) manages state with useState.
- Child component (Chk) communicates changes back to the parent.
- Demonstrates how e.target.checked is used to capture checkbox state.
- Button is enabled only when terms are accepted.

## Why this project
This project is part of my React learning journey. Each repo focuses on one core concept so I can track my progress and build a strong foundation.

## How to run locally
1. Clone the repository:
   git clone https://github.com/phantekzy/react-reverse-dataflow.git
2. Navigate into the folder:
   cd react-reverse-dataflow
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev

## What I learned
- How parent and child components share data in React.
- How reverse data flow works using props and functions.
- The difference between e.target and e.target.checked.
- Building a simple real-world UI pattern: checkbox + disabled button.
