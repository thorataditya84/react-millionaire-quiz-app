import { useEffect, useState } from "react"
import "./questions.css"
import useSound from "use-sound"
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"



export default function Questions({
    questionsData,
    setStop,
    questionNumber,
    setQuestionNumber
}) {

    const [question, setQuestion] = useState(null);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [className, setClassName] = useState("answer");

    const [letsPlay] = useSound(play);    

    const [correctAnswer] = useSound(correct);

    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        setQuestion(questionsData[questionNumber - 1]);
    }, [questionsData, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, delay);  
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("option active");
        delay(3000, () => setClassName(a.correct ? "option correct" : "option wrong"));
        delay(6000, () => {
            if(a.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            }
            else {
                setStop(true);
            }
        });
    };


    return (
        <div className="questions">
            <div className="question">{question?.question}</div>
            <div className="options">
                {
                    question?.answers.map((a) => (
                        <div
                            onClick={() => handleClick(a)}
                            className={selectedAnswer === a ? className : "option"}
                        >
                            {a.text}
                        </div>
                    ))
                }


            </div>
        </div>
    )
}
