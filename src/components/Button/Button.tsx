import { Link } from "react-router-dom";

type fill = "solid" | "outline";
type color = "primary" | "secondary";
type styles = `${fill}-${color}`;

type ButtonProps = {
  children: string;
  url?: string;
  icon?: React.ReactNode;
  variant: styles;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const Button = (props: ButtonProps) => {
  const btnVariants = {
    "solid-primary": "bg-green-500 p-4 block rounded hover:bg-green-700 transition-colors",
    "solid-secondary": "bg-blue-500 p-4 block rounded hover:bg-blue-600 text-black transition-colors",
    "outline-primary": "border border-green-500 text-green-500 p-4 block rounded hover:bg-green-500 hover:text-black transition-colors",
    "outline-secondary": "border border-blue-500 text-blue-500 p-4 block rounded hover:bg-blue-500 hover:text-black transition-colors",
  };

  // if (props.url) {
  return (
    <a href={props.url} className={btnVariants[props.variant]} target={props.target ? props.target : "_self"}>
      <span className="flex flex-row items-center justify-center text-sm font-medium gap-1">
        {props.icon}
        {props.children}
      </span>
    </a>
  );
};
