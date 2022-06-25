import { format, isPast } from "date-fns";
import pt_BR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { Teacher } from "../Teacher/Teacher";

interface LessonProps {
  title: string;
  slug: string;
  description: string;
  availableAt: string;
  lessonType: "live" | "class";
  teacher: {
    name: string;
    avatarURL: string;
  };
}

export const Lesson = (props: LessonProps) => {
  const formatedDate = new Date(props.availableAt);
  const isLessonAvailableAt = isPast(formatedDate);
  const { slug } = useParams<{ slug: string }>();

  return (
    <Link to={`/classroom/${props.slug}`} className="group">
      <span className="block mb-2 text-gray-300">{format(formatedDate, "eeee' • 'dd' de 'LLLL' • 'HH'h'mm", { locale: pt_BR })}</span>

      <div className={`flex flex-col w-full justify-center border border-gray-500 p-4 rounded group-hover:border-green-400 ${slug == props.slug ? "activeLesson" : ""}`}>
        <header className="flex w-full items-center justify-between mb-4">
          {isLessonAvailableAt ? (
            <span className={`flex flex-row items-center text-sm text-blue-500 font-medium gap-1 ${slug == props.slug ? "text-white" : ""}`}>
              <CheckCircle size={24} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex flex-row items-center text-sm text-orange-500 font-medium gap-1">
              <Lock size={24} />
              Em Breve
            </span>
          )}
          <span className={`text-xs font-bold py-[2px] px-2 border border-green-300 rounded ${slug == props.slug ? "border-white" : ""}`}>{props.lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}</span>
        </header>
        <div className="flex flex-1 flex-col gap-6">
          <strong className="">{props.title}</strong>

          <Teacher data={props.teacher} avatarSize={"sm"} />
        </div>
      </div>
    </Link>
  );
};
