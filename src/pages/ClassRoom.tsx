import { DiscordLogo } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { Video } from "../components/Video/Video";

export const ClassRoomPage = () => {
  return (
    <main className="flex-1">
      <div className="bg-black flex h-full max-h-[60vh] min-h-min justify-center">
        <Video />
      </div>
      <div className="p-8 flex w-full flex-row">
        <div className="flex-1">
          Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando
          ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS
          criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no
          nosso front-end utilizando Apollo Client.
        </div>
        <div>
          <Button type="anchor" url="#" variant="solid-primary" icon={<DiscordLogo />}>
            aaaa
          </Button>
        </div>
      </div>
      <div></div>
    </main>
  );
};
