import { useNavigate, useParams } from "react-router-dom";
import { quizData } from "../datas/questions";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countPoints } from "../store/slice/answerSlice";

const SingleQuestion = () => {
    let { quizId } = useParams();
    const [singleQuestion, setSingleQuestion] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [timer, setTimer] = useState(15);
    const selectedTopic = useSelector((state) => state.topic);
    //let questionId = parseInt(quizId);
    const interval = useRef();
    const questionId = useRef();

    useEffect(() => {
        questionId.current = parseInt(quizId);
    }, [quizId]);

    //let interval = null;

    console.log({ selectedTopic });

    const checkElapsedTime = () => {
        setTimer((prevTimer) => prevTimer - 1);
    };

    const getQuestion = useCallback(() => {
        let question = quizData[selectedTopic].filter(
            (data) => data.id + 1 == parseInt(quizId)
        );

        console.log("Question", question[0]);
        setSingleQuestion(question[0]);
    }, [quizId, selectedTopic]);

    const checkAnswer = useCallback(
        (isCorrect) => {
            if (isCorrect) {
                dispatch(countPoints(5));
            }
        },

        [dispatch]
    );

    useEffect(() => {
        getQuestion();

        interval.current = setInterval(checkElapsedTime, 1000);

        if (timer == 0) {
            navigate("/");

            if (questionId.current >= quizData[selectedTopic].length) {
                navigate("/quiz/result");
            } else {
                navigate(`quiz/${++questionId.current}`);
                setTimer(15);
            }
        }

        return () => clearInterval(interval.current);
    }, [getQuestion, checkAnswer, timer, navigate, selectedTopic]);

    return (
        <div className="h-screen relative flex flex-col justify-center items-center">
            <div
                className={`mb-12 flex justify-center items-center w-12 h-12 border-2  rounded-full ${
                    timer <= 10
                        ? "border-red-500 text-red-500"
                        : "border-green-500 text-green-500"
                }`}
            >
                <p className=" text-2xl">{timer}</p>
            </div>
            <h1 className="font-bold text-2xl">
                Question n° {singleQuestion.id + 1}
            </h1>
            <hr />
            <p className="my-6 text-zinc-700">{singleQuestion.question}</p>
            <h2 className="font-bold text-2xl mb-5">Answers:</h2>
            <ul>
                {!!singleQuestion.answers &&
                    singleQuestion.answers.map((answer, index) => (
                        <li
                            key={index}
                            className="bg-zinc-800 text-white px-4 py-2 text-center mb-4"
                        >
                            <button
                                onClick={() => {
                                    let isAnswerCorrect = answer["isCorrect"];

                                    checkAnswer(isAnswerCorrect);

                                    if (
                                        questionId.current >=
                                        quizData[selectedTopic].length
                                    ) {
                                        navigate("/quiz/result");
                                    } else {
                                        navigate(
                                            `/quiz/${++questionId.current}`
                                        );
                                        setTimer(15);
                                    }
                                }}
                            >
                                {answer.label}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SingleQuestion;
