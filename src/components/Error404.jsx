import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="h-screen flex gap-6 flex-col justify-center items-center">
            <h1 className="text-2xl text-zinc-800 font-bold">
                Oups! Page not found
            </h1>
            <p>
                Please come back to{" "}
                <Link to="/" className="font-bold underline text-blue-600">
                    homepage
                </Link>
            </p>
        </div>
    );
};

export default Error404;
