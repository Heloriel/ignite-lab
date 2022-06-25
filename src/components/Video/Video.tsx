import { Player, DefaultUi, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";

export const Video = () => {
  return (
    <div className="max-h-[60vh] max-w-[1100px] w-full aspect-video z-10 ">
      <Player>
        <Youtube videoId={"KJj70dBgRPo"} />
        <DefaultUi />
      </Player>
    </div>
  );
};
