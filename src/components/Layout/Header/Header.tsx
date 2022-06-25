import Logo from "../Logo/Logo";

export const Header = () => {
  return (
    <div className="flex w-full py-5 text-center justify-center bg-gray-700 border-b border-gray-600 sticky top-0 z-50">
      <a href="/classroom/">
        <Logo />
      </a>
    </div>
  );
};
