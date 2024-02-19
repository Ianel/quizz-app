import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetScore } from "../store/slice/answerSlice";

const ResultScore = () => {
    const score = useSelector((state) => state.score);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="font-bold text-zinc-800 text-2xl">Result</h1>
            <p>You have reached the end. Your score: </p>
            <p className="text-zinc-700 font-medium text-2xl">{score} points</p>
            <button
                className="bg-zinc-700 text-white px-4 py-2"
                onClick={() => {
                    navigate("/");
                    dispatch(resetScore());
                }}
            >
                Play again
            </button>
        </div>
    );
};

export default ResultScore;
