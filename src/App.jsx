import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import SingleQuestion from "./components/SingleQuestion";
import Home from "./pages/Home";
import ResultScore from "./pages/ResultScore";
import Error404 from "./components/Error404";
import TopicChoice from "./pages/TopicChoice";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<Home />}
                    errorElement={<Error404 />}
                />
                <Route
                    path="quiz/:quizId"
                    element={<SingleQuestion />}
                    errorElement={<Error404 />}
                />
                <Route
                    path="quiz/result"
                    element={<ResultScore />}
                    errorElement={<Error404 />}
                />
                <Route
                    path="quiz/topics"
                    element={<TopicChoice />}
                    errorElement={<Error404 />}
                />
            </>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
