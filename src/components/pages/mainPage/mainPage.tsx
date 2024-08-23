import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import "./mainPage.css";
import { Movies } from "../../organisms/movies/movies";
import { PaginationOutlined } from "../../molecules/pagination/pagination";
export const MainPage = () => {
    return (
        <MainTemplate>
            <main className="MainPage 2xl">
                <Movies />
                <PaginationOutlined />
            </main>
        </MainTemplate>
    );
};
