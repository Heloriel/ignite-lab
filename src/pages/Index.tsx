import { Button } from "../components/Button/Button";
import { Footer } from "../components/Layout/Footer/Footer";
import Logo from "../components/Layout/Logo/Logo";

export const Index = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex-1 flex flex-col justify-center items-center reactlogo bgblur">
        <div className="flex-1 flex w-full items-center justify-center mockup">
          <form action="" className="flex flex-col bg-gray-700 p-8 rounded border border-gray-500 gap-2 w-96">
            <div className="flex w-full justify-center mb-4">
              <Logo />
            </div>
            <input className="p-4 text-base rounded bg-gray-900 focus:border-2 focus:border-green-400" placeholder="USUÁRIO" type="text" name="" id="" />
            <input className="p-4 text-base rounded bg-gray-900 mb-6" type="password" placeholder="SENHA" name="" id="" />
            <Button variant="solid-primary" url="/classroom/">
              ENTRAR
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
