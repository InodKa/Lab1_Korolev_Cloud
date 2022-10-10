import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";

export default function DashboardLayout({ children }) {
    return (
        <><Header /><Main>{children}</Main><Footer /></>
    );
}