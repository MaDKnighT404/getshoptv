import { Bunner } from "../features/Bunner";

const VideoPage = () => {
  return (
    <>
      <video
        className="brightness-70 fixed inset-0 h-full w-full object-cover"
        src="/video/Van_Damme_video.mp4"
        autoPlay
        loop
        muted
      />
      <Bunner />
    </>
  );
};

export default VideoPage;
