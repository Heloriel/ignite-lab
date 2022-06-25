import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="flex-1">{props.children}</div>
          <div className="px-6">
            <Footer />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
