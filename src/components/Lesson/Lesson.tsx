import { CheckCircle } from "phosphor-react";

export const Lesson = () => {
    return (
        <a href="#">
            <span className="block mb-2 text-gray-300">
                Domingo • 20 de junho • 19h00
            </span>

            <div className="flex flex-col w-full justify-center border border-gray-500 p-4 rounded">

                <header className="flex w-full items-center justify-between mb-4">
                    <span className="flex flex-row items-center text-sm text-blue-500 font-medium">
                        <CheckCircle size={24} className="mr-[10.5px]" />
                        Conteúdo Liberado
                    </span>
                    <span className="text-xs font-bold py-[2px] px-2 border border-green-300 rounded">
                        AO VIVO
                    </span>
                </header>

                <strong className="">
                    Abertura do evento ignite.
                </strong>
            </div>
        </a>
    );
}