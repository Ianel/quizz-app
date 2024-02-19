import { useDispatch } from "react-redux";
import { topics } from "../datas/topics";
import { selectTopic } from "../store/slice/topicSlice";
import { useNavigate } from "react-router-dom";

const TopicChoice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTopic = (topic) => {
        dispatch(selectTopic(topic));

        navigate("/");
        navigate(`quiz/1`);
    };

    return (
        <div className="h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="font-bold text-zinc-800 text-2xl">
                Choose your topic
            </h1>
            <ul>
                {!!topics &&
                    Object.values(topics).map((topic, index) => {
                        return (
                            <li
                                className="bg-zinc-800 text-white px-4 py-2 text-center mb-4"
                                key={index}
                            >
                                <button onClick={() => handleTopic(topic)}>
                                    {topic}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default TopicChoice;
