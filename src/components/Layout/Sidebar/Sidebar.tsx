import { Lesson } from "../../Lesson/Lesson";

export const Sidebar = () => {
    return (
        <div className="flex flex-col w-[348px] bg-gray-700 border-l border-gray-600 p-6">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma das Aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </div>
    );
}