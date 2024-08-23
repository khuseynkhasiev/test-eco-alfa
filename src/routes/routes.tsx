import { Routes, Route } from "react-router-dom";
import { MainPage } from "../components/pages/mainPage/mainPage";
import { NotFoundPage } from "../components/pages/notFoundPage/notFoundPage";
import { MovieInfoPage } from "../components/pages/movieInfoPage/movieInfoPage";

export const RoutesSetting = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<MovieInfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
