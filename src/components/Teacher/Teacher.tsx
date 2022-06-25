export const Teacher = () => {
  return (
    <div className="flex w-full flex-row items-center gap-5">
      <div>
        <img src="https://github.com/diego3g.png" className="rounded-full w-16 h-16 border-2 border-blue-500" />
      </div>
      <div className="flex flex-col flex-1">
        <strong className="text-2xl">Diego Fernandes</strong>
        <span>Co-fundador e CTO na Rocketseat </span>
      </div>
    </div>
  );
};
