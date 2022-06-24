import { Link } from "react-router-dom";

type fill = "solid" | "outline";
type color = "primary" | "secondary";
type styles = `${fill}-${color}`;

type ButtonProps = {
  children: string;
  icon?: React.ReactNode;
  variant: styles;
} & (
  | {
      type: "anchor";
      url: string;
    }
  | {
      type?: "button" | undefined;
    }
);

export const Button = (props: ButtonProps) => {
  if (props.type == "anchor") {
    return (
      <Link to={props.url}>
        <a>{props.children}</a>
      </Link>
    );
  } else {
    return <button>This is a button</button>;
  }
};
