import { Player, DefaultUi, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";

interface VideoProps {
  videoId: string;
}

export const Video = (props: VideoProps) => {
  return (
    <div className="max-h-[60vh] max-w-[1100px] w-full aspect-video z-10 ">
      <Player autoplay={false}>
        <Youtube videoId={props.videoId} />
        <DefaultUi />
      </Player>
    </div>
  );
};
