import "./app.css";
import { useEffect, useMemo, useState } from "react";
import jsonData from "./data.json";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Questions from "./components/Questions";


function App() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("$ 0");

    const data = jsonData.data;

/*
    const data = [
        {
            id: 1,
            question: "Rolex is a company that specializes in what type of product?",
            answers: [
                {text: "Phone", correct: false},
                {text: "Watches", correct: true},
                {text: "Food", correct: false},
                {text: "Cosmetic", correct: false}
            ]
        },
        {
            id: 2,
            question: "In Cricket, stump to stump distance is?",
            answers: [
                {text: "30 yards", correct: false},
                {text: "30 meters", correct: false},
                {text: "22 yards", correct: true},
                {text: "22 meters", correct: false}
            ]
        },
        {
            id: 3,
            question: "The first month of the Indian national calendar is",
            answers: [
                {text: "Magha", correct: false},
                {text: "Chaitra", correct: true},
                {text: "Ashadha", correct: false},
                {text: "Vaishakha", correct: false}
            ]
        },
        {
            id: 4,
            question: "Where is the stinger on a scorpion's body?",
            answers: [
                {text: "Mouth", correct: false},
                {text: "Tail", correct: true},
                {text: "Claw", correct: false},
                {text: "Leg", correct: false}
            ]
        },
        {
            id: 5,
            question: "The language of Lakshadweep. a Union Territory of India, is",
            answers: [
                {text: "Tamil", correct: false},
                {text: "Hindi", correct: false},
                {text: "Malayalam", correct: true},
                {text: "Telugu", correct: false}
            ]
        },
        {
            id: 6,
            question: "In which group of places the Kumbha Mela is held every twelve years?",
            answers: [
                {text: "Ujjain. Purl; Prayag. Haridwar", correct: false},
                {text: "Prayag. Haridwar, Ujjain,. Nasik", correct: true},
                {text: "Rameshwaram. Purl, Badrinath. Dwarika", correct: false},
                {text: "Chittakoot, Ujjain, Prayag,'Haridwar", correct: false}
            ]
        },
        {
            id: 7,
            question: "Pongal is a popular festival of which state?",
            answers: [
                {text: "Karnataka", correct: false},
                {text: "Karnataka", correct: false},
                {text: "Tamil Nadu", correct: true},
                {text: "Andhra Pradesh", correct: false}
            ]
        },
        {
            id: 8,
            question: "Who played the famous character of harry potter?",
            answers: [
                {text: "Johnny Deep", correct: false},
                {text: "Leonardo Di Caprio", correct: false},
                {text: "Denzel Washington", correct: false},
                {text: "Daniel Redcliffe", correct: true}
            ]
        },
        {
            id: 9,
            question: "The Brihadeeswara temple at Tanjore was built by an emperor of what dynasty?",
            answers: [
                {text: "Chola", correct: true},
                {text: "Mughal", correct: false},
                {text: "Chera", correct: false},
                {text: "Pandya", correct: false}
            ]
        },
        {
            id: 10,
            question: "In architecture, what is the name of the center stone at the top of an arch?",
            answers: [
                {text: "Cornerstone", correct: false},
                {text: "Impost", correct: false},
                {text: "Lodestone", correct: false},
                {text: "Keystone", correct: true}
            ]
        },
        {
            id: 11,
            question: "Who was the prime minister of Nandas?",
            answers: [
                {text: "Chanakya", correct: false},
                {text: "Nanda", correct: false},
                {text: "Asoka", correct: false},
                {text: "Raksas", correct: true}
            ]
        },
        {
            id: 4,
            question: "Which former President had the unique distinction of getting two consecutive terms in office?",
            answers: [
                {text: "Dr Rajendra Prasad", correct: true},
                {text: "Dr Fakhruddin Ali Ahmed", correct: false},
                {text: "Dr Zakir Hussain", correct: false},
                {text: "Giani Zail Singh", correct: false}
            ]
        },
        {
            id: 13,
            question: "When did the website `Facebook` launch?",
            answers: [
                {text: "2004", correct: true},
                {text: "2005", correct: false},
                {text: "2006", correct: false},
                {text: "2007", correct: false}
            ]
        },
        {
            id: 14,
            question: "Leading freedom fighter Chittaranjan Das was popularly called what?",
            answers: [
                {text: "Deenbandhu", correct: false},
                {text: "Deshbandhu", correct: true},
                {text: "Purush", correct: false},
                {text: "Lokmanya", correct: false}
            ]
        },
        {
            id: 4,
            question: "Which American missionary trained social reformer Savitribai Phule to become recognised as the first female teacher of India?",
            answers: [
                {text: "Cynthia Farrar", correct: true},
                {text: "Ida Sophia Scudder", correct: false},
                {text: "Charlotte White", correct: false},
                {text: "Amy Beatrice Carmichael", correct: false}
            ]
        }
    ];
*/
    const moneyPyramid = useMemo (
        () => [
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
        ].reverse(), []
    );

    useEffect(() => {
        questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);


    return (
        <div className="app">
            {
                !username ? (
                    <Start setUsername={setUsername} />
                ) : (
                    <>
                        <div className="main">
                            {
                                (timeOut) ? (
                                    <h1 className="endText">That was close! {username}, You earned: {earned}</h1>
                                ) : (
                                    questionNumber === 16 ? (
                                        <h1 className="endText">Congratulations {username}, you are a Millionaire!</h1>
                                    ) : (
                                        <>
                                            <div className="top">
                                                <div className="timer">
                                                    <Timer
                                                    setTimeOut={setTimeOut}
                                                    questionNumber={questionNumber}
                                                    />
                                                </div>
                                            </div>
                                            <div className="bottom">
                                            <Questions
                                                data={data}
                                                questionNumber={questionNumber}
                                                setQuestionNumber={setQuestionNumber}
                                                setTimeOut={setTimeOut}
                                            />
                                            </div>
                                        </>
                                    )
                                )
                            }
                        </div>
                        <div className="pyramid">
                            <ul className="moneyList">
                                {
                                    moneyPyramid.map((m) => (
                                        <li
                                            className={
                                                questionNumber === m.id
                                                ? "moneyListItem active"
                                                : "moneyListItem"
                                            }
                                        >
                                            <span className="moneyListItemNumber">{m.id}</span>
                                            <span className="moneyListItemAmount">{m.amount}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    );
}


export default App;