import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                {props.children}
                <Sidebar />
            </div>
        </div>
    );
}