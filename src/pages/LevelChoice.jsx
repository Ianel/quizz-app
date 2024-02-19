import { useDispatch } from "react-redux";
import { levels } from "../datas/levels";
import { selectLevel } from "../store/slice/levelSlice";
import { useNavigate } from "react-router-dom";

const LevelChoice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLevel = (level) => {
        dispatch(selectLevel(level));

        navigate("/");
        navigate(`quiz/1`);
    };

    return (
        <div className="h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="font-bold text-zinc-800 text-2xl">
                Choose your level
            </h1>
            <ul>
                {!!levels &&
                    Object.values(levels).map((level, index) => {
                        return (
                            <li
                                className="bg-zinc-800 text-white px-4 py-2 text-center mb-4"
                                key={index}
                            >
                                <button onClick={() => handleLevel(level)}>
                                    {level}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default LevelChoice;
