import { DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Cards/Cards";
import { Teacher } from "../components/Teacher/Teacher";
import { Video } from "../components/Video/Video";

export const ClassRoomPage = () => {
  return (
    <main className="flex-1">
      <div className="flex h-full min-h-min justify-center bg-black">
        <Video />
      </div>
      <div className="p-8 flex w-full flex-row">
        <div className="flex-1">
          <p className="font-bold mb-4 text-2xl">Aula 01 - Criando o projeto e realizando o setup inicial</p>
          <div className="leading-relaxed mb-6">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</div>
          <div>
            <Teacher />
          </div>
        </div>
        <div className="flex flex-col align-top">
          <Button url="#" variant="solid-primary" icon={<DiscordLogo size={24} />}>
            COMUNIDADE NO DISCORD
          </Button>
          <Button url="#" variant="outline-secondary" icon={<Lightning size={24} />}>
            ACESSE O DESAFIO
          </Button>
        </div>
      </div>
      <div className="flex w-full gap-8 p-8">
        <div className="flex-1">
          <Card title="Material complementar" icon={<FileArrowDown size={39} />} url="a">
            Acesse o material complementar para acelerar o seu desenvolvimento
          </Card>
        </div>
        <div className="flex-1">
          <Card title="Wallpapers exclusivos" icon={<Image size={39} />} url="a">
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
          </Card>
        </div>
      </div>
    </main>
  );
};
