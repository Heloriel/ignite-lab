import { Player, DefaultUi, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";

export const Video = () => {
  return (
    <div className="h-full min-w-[275px] aspect-video">
      <Player>
        <Youtube videoId={"KJj70dBgRPo"} />
        <DefaultUi />
      </Player>
    </div>
  );
};
