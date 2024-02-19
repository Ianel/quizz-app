import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center gap-12 h-screen">
            <h1 className="text-2xl text-zinc-800 font-bold">
                Welcome to the Quiz App
            </h1>
            <button
                className="bg-zinc-700 text-white px-4 py-2"
                onClick={() => {
                    navigate("/quiz/topics");
                }}
            >
                Play !
            </button>
        </div>
    );
};

export default Home;
