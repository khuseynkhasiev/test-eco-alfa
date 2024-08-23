import { Footer } from "../../organisms/footer/footer";
import { Header } from "../../organisms/header/header";
import "./mainTemplate.css";
interface MainTemplate {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: MainTemplate) => {
    return (
        <div className="MainTemplate bg-blue-200	">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
