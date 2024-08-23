import { Link } from "react-router-dom";
import "./header.css";
import { FilterMoviesBtn } from "../../atoms/filterMoviesBtn/filterMoviesBtn";

export const Header = () => {
    return (
        <header className="Header bg-blue-300">
            <nav className="Header__nav">
                <ul className="Header__nav-list">
                    <Link to="/">
                        <li className="Header__nav-item">Главная</li>
                    </Link>
                </ul>
            </nav>
            <FilterMoviesBtn />
        </header>
    );
};
