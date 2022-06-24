import { Link } from "react-router-dom";

type fill = "solid" | "outline";
type color = "primary" | "secondary";
type styles = `${fill}-${color}`;

type ButtonProps = {
  children: string;
  url?: string;
  icon?: React.ReactNode;
  variant: styles;
};

export const Button = (props: ButtonProps) => {
  const btnVariants = {
    "solid-primary": "bg-green-500 p-4 block rounded hover:bg-green-700 transition-colors mb-4",
    "solid-secondary":
      "bg-blue-500 p-4 block rounded hover:bg-blue-600 text-black transition-colors mb-4",
    "outline-primary":
      "border border-green-500 text-green-500 p-4 block rounded hover:bg-green-500 hover:text-black transition-colors mb-4",
    "outline-secondary":
      "border border-blue-500 text-blue-500 p-4 block rounded hover:bg-blue-500 hover:text-black transition-colors mb-4"
  };

  if (props.url) {
    return (
      <Link to={props.url} className={btnVariants[props.variant]}>
        <a className="flex flex-row items-center justify-center text-sm font-medium gap-1">
          {props.icon}
          {props.children}
        </a>
      </Link>
    );
  } else {
    return <button>This is a button</button>;
  }
};
