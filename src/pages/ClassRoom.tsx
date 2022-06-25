import { gql, useQuery } from "@apollo/client";
import { DiscordLogo, FileArrowDown, Lightning, Image, CaretRight } from "phosphor-react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Cards/Cards";
import { Teacher } from "../components/Teacher/Teacher";
import { Video } from "../components/Video/Video";

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    description: string;
    videoId: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

export const ClassRoomPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const GET_LESSON_QUERY = gql`
    query GetLessonBySlug($slug: String) {
      lesson(where: { slug: $slug }) {
        title
        description
        videoId
        teacher {
          avatarURL
          bio
          name
        }
      }
    }
  `;

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_QUERY, {
    variables: {
      slug: slug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen flex-col">
        <strong className="text-3xl">Selecione uma aula para começar.</strong>
        <p className="mt-2">
          <CaretRight size={32} />
        </p>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="flex h-full min-h-min justify-center bg-black">{slug ? <Video videoId={data.lesson.videoId} /> : <div className="flex-1">'Selecione uma aula para começar'</div>}</div>
      <div className="p-8 flex w-full flex-row gap-8">
        <div className="flex-1">
          <p className="font-bold mb-4 text-2xl">{data.lesson.title}</p>
          <div className="leading-relaxed mb-6">{data.lesson.description}</div>
          <div>
            <Teacher data={data.lesson.teacher} avatarSize={"md"} />
          </div>
        </div>
        <div className="flex flex-col align-top gap-4">
          <Button url="https://discord.com/invite/rocketseat" variant="solid-primary" icon={<DiscordLogo size={24} />}>
            COMUNIDADE NO DISCORD
          </Button>
          <Button url="#" variant="outline-secondary" icon={<Lightning size={24} />}>
            ACESSE O DESAFIO
          </Button>
        </div>
      </div>
      <div className="flex w-full gap-8 p-8">
        <div className="flex-1">
          <Card title="Material complementar" icon={<FileArrowDown size={39} />} url="#">
            Acesse o material complementar para acelerar o seu desenvolvimento
          </Card>
        </div>
        <div className="flex-1">
          <Card title="Wallpapers exclusivos" icon={<Image size={39} />} url="#">
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
          </Card>
        </div>
      </div>
    </main>
  );
};
