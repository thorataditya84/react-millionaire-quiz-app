import { useEffect, useState } from "react";
import "./app.css";
import Question from "./components/Questions"
import Timer from "./components/Timer"


function App() {

    const [questionNumber, setQuestionNumber] = useState(1);

    const [stop, setStop] = useState(false);

    const [earned, setEarned] = useState("$ 0");

    const questionsData = [{
        id: 1,
        question: "Rolex is a company that specializes in what type of product?",
        answers: [
            {text: "Phone", correct: false},
            {text: "Watches", correct: true},
            {text: "Food", correct: false},
            {text: "Cosmetic", correct: false},
        ]}, {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
            {text: "2004", correct: true},
            {text: "2005", correct: false},
            {text: "2006", correct: false},
            {text: "2007", correct: false},
        ]}, {
        id: 3,
        question: "Who played the character of harry potter in movie?",
        answers: [
            {text: "Johnny Deep", correct: false},
            {text: "Leonardo Di Caprio", correct: false},
            {text: "Denzel Washington", correct: false},
            {text: "Daniel Red Cliff", correct: true}
        ]},
    ];

    const money = [
        {number: 1, amount: "$ 100"},
        {number: 2, amount: "$ 200"},
        {number: 3, amount: "$ 300"},
        {number: 4, amount: "$ 500"},
        {number: 5, amount: "$ 1000"},
        {number: 6, amount: "$ 2000"},
        {number: 7, amount: "$ 4000"},
        {number: 8, amount: "$ 8000"},
        {number: 9, amount: "$ 16000"},
        {number: 10, amount: "$ 32000"},
        {number: 11, amount: "$ 64000"},
        {number: 12, amount: "$ 125000"},
        {number: 13, amount: "$ 250000"},
        {number: 14, amount: "$ 500000"},
        {number: 15, amount: "$ 1000000"}
    ].reverse();

    useEffect(() => {
        questionNumber > 1 && 
        setEarned(money.find((m) => m.id === questionNumber - 1).amount);
    }, [money, questionNumber]);

    return (
        <div className="app">
            <div className="main">
                {
                    stop ? (
                        <h1 className="endText">You earned: {earned}</h1> 
                    ) : (
                        <>
                            <div className="top">
                                <div className="timer">
                                    <Timer setStop={setStop} questionNumber={questionNumber} />
                                </div>
                            </div>
                            <div className="bottom">
                                <Question
                                    questionsData={questionsData}
                                    setStop={setStop}
                                    questionNumber={questionNumber}
                                    setQuestionNumber={setQuestionNumber}
                                />
                            </div>
                        </>
                    )
                }
            </div>
            <div className="pyramid">
                <ul className="moneyList">
                    {
                        money.map(element => (
                            <li className={questionNumber === element.number ? "moneyListItem active" : "moneyListItem"}>
                                <span className="moneyListItemNumber">{element.number}</span>
                                <span className="moneyListItemAmount">{element.amount}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}


export default App;