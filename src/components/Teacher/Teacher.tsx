interface TeacherProps {
  data: {
    name: string;
    bio?: string;
    avatarURL: string;
  };
  avatarSize: "sm" | "md";
}

export const Teacher = (props: TeacherProps) => {
  const size = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
  };
  return (
    <div className="flex w-2/3 flex-row items-center gap-5">
      <div>
        <img src={props.data.avatarURL} className={`rounded-full ${size[props.avatarSize]} border-2 border-blue-500`} />
      </div>
      <div className="flex flex-col flex-1">
        {props.avatarSize == "md" ? <strong className="text-2xl">{props.data.name}</strong> : <strong className="text-1xl">{props.data.name}</strong>}
        {props.avatarSize == "md" ? <span className="text-sm text-gray-300">{props.data.bio}</span> : ""}
      </div>
    </div>
  );
};
