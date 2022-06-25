import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

type CardProps = {
  children: string;
  url: string;
  icon: React.ReactNode;
  title: string;
};

export const Card = (props: CardProps) => {
  return (
    <Link to={""}>
      <div className="flex flex-1 h-36 items-center rounded overflow-hidden bg-gray-700 hover:bg-gray-600">
        <div className="flex h-full bg-green-700 w-24 justify-center items-center ">{props.icon}</div>
        <div className="flex flex-col w-full px-6 gap-2">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          {props.children}
        </div>
        <div className="flex px-8 h-full items-center justify-center">
          <CaretRight size={24} />
        </div>
      </div>
    </Link>
  );
};
