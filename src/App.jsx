import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./components/Timer/index";
import Trivia from "./components/Trivia/index";
import Start from "./components/Start/index";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of the following is not a US state?",
      answers: [
        {
          text: "Alabama",
          correct: false,
        },
        {
          text: "Alaska",
          correct: false,
        },
        {
          text: "Alberta",
          correct: true,
        },
        {
          text: "Arizona",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "According to legend, what shape was King Arthur's table?",
      answers: [
        {
          text: "Round",
          correct: true,
        },
        {
          text: "Square",
          correct: false,
        },
        {
          text: "Oval",
          correct: false,
        },
        {
          text: "Oblong",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Who invented a puzzle cube popular in the late 1970s and early 1980s?",
      answers: [
        {
          text: "Enrico Fermi",
          correct: false,
        },
        {
          text: "Ernst Blofeld",
          correct: false,
        },
        {
          text: "Erno Rubik",
          correct: true,
        },
        {
          text: "Buckminster Fuller",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "In which city is Gaudi's famous church of the Sagrada Familia?",
      answers: [
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "Granada",
          correct: false,
        },
        {
          text: "Seville",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Lennox Lewis is a famous figure in which sport?",
      answers: [
        {
          text: "Horse racing",
          correct: false,
        },
        {
          text: "Tennis",
          correct: false,
        },
        {
          text: "Speedway",
          correct: false,
        },
        {
          text: "Boxing",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Egypt, Sudan and Eritrea all have shores on which sea?",
      answers: [
        {
          text: "Black Sea",
          correct: false,
        },
        {
          text: "Red Sea",
          correct: true,
        },
        {
          text: "Caspian Sea",
          correct: false,
        },
        {
          text: "Arabian Sea",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "Which of the grand slam tennis tournaments is played on grass?",
      answers: [
        {
          text: "Australian Open",
          correct: false,
        },
        {
          text: "French Open",
          correct: false,
        },
        {
          text: "US Open",
          correct: false,
        },
        {
          text: "Wimbledon",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which city hosted the 2000 Olympic Games?",
      answers: [
        {
          text: "Sydney",
          correct: true,
        },
        {
          text: "Adelaide",
          correct: false,
        },
        {
          text: "Brisbane",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who, in the 'Star Wars' films, inherited Jedi powers?",
      answers: [
        {
          text: "Mark Moonraker",
          correct: false,
        },
        {
          text: "Luke Skywalker",
          correct: true,
        },
        {
          text: "Max Skyscraper",
          correct: false,
        },
        {
          text: "Jack Stargazer",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these was a French philosopher?",
      answers: [
        {
          text: "Jean-Luc Picard",
          correct: false,
        },
        {
          text: "Jean-Paul Gaultier",
          correct: false,
        },
        {
          text: "Jean-Luc Away",
          correct: false,
        },
        {
          text: "Jean-Paul Sartre",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which country does not border Italy?",
      answers: [
        {
          text: "Austria",
          correct: false,
        },
        {
          text: "Belgium",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who wrote 'Alice in Wonderland'?",
      answers: [
        {
          text: "Lewis Carroll",
          correct: true,
        },
        {
          text: "J R R Tolkien",
          correct: false,
        },
        {
          text: "J M Barrie",
          correct: false,
        },
        {
          text: "A A Milne",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "What was the name of the two NASA missions sent to Mars in 1975?",
      answers: [
        {
          text: "Viking",
          correct: true,
        },
        {
          text: "Visigoth",
          correct: false,
        },
        {
          text: "Saxon",
          correct: false,
        },
        {
          text: "Hun",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Words from which country's national anthem appear around the edge of a £1 coin?",
      answers: [
        {
          text: "Scotland",
          correct: false,
        },
        {
          text: "Wales",
          correct: true,
        },
        {
          text: "UK",
          correct: false,
        },
        {
          text: "Ireland",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "A Kiwi is a native of which country?",
      answers: [
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "New Zealand",
          correct: true,
        },
        {
          text: "Canada",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="end-text">You earned: {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="right-side">
            <h1 className="game-title">Who Wants to Be a Millionaire</h1>
            <ul className="money-list">
              {moneyPyramid.map((money) => (
                <li
                  className={
                    questionNumber === money.id
                      ? "money-list-item active"
                      : "money-list-item"
                  }
                >
                  <span className="money-list-item-number">{money.id}</span>
                  <span className="money-list-item-amount">{money.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
