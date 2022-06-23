import { gql, useQuery } from "@apollo/client";
import { Lesson } from "../../Lesson/Lesson";

interface Lessons {
  id: string;
  title: string;
  slug: string;
  description: string;
  availableAt: string;
  teacher: {
    id: string;
    name: string;
  };
  lessonType: "live" | "class";
}

export const Sidebar = () => {
  const GET_LESSONS_QUERY = gql`
    query LessonsQuery {
      lessons(orderBy: availableAt_ASC) {
        id
        lessonType
        slug
        title
        description
        availableAt
      }
    }
  `;

  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY);

  return (
    <div className="flex flex-col w-[348px] bg-gray-700 border-l border-gray-600 p-6">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              availableAt={lesson.availableAt}
              description={lesson.description}
              slug={lesson.slug}
              lessonType={lesson.lessonType}
              title={lesson.title}
            />
          );
        })}
      </div>
    </div>
  );
};
