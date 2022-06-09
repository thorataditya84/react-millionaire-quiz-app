import { useState } from 'react';
import './app.css';


function App() {

    const [questionNumber, setQuestionNumber] = useState(5);

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

    return (
        <div className="app">
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom">Q and A</div>
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