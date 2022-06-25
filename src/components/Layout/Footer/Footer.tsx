import RocketSeatLogo from "../Logo/RocketseatLogo";

export const Footer = () => {
  return (
    <footer className="flex flex-row p-7 items-center border-t border-t-gray-500">
      <div>
        <RocketSeatLogo />
      </div>
      <div className="flex-1 px-6">Rocketseat - Todos os direitos reservados</div>
      <div className="">
        <a href="#">Politicas de Privacidade</a>
      </div>
    </footer>
  );
};
