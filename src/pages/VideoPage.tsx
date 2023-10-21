import { useContext, useRef, useEffect } from "react";
import VideoContext from "./Context/VideoContext";
import { Bunner } from "../features/Bunner";

const VideoPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContext = useContext(VideoContext);

  if (!videoContext) {
    throw new Error("VideoPage component must be wrapped within VideoProvider");
  }
  const { currentTime, setCurrentTime } = videoContext;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = currentTime;
      videoElement.play();
    }

    return () => {
      if (videoElement) {
        setCurrentTime(videoElement.currentTime);
      }
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="brightness-70 fixed inset-0 h-full w-full object-cover"
        src="/video/Van_Damme_video.mp4"
        loop
        muted
      />
      <Bunner />
    </>
  );
};

export default VideoPage;
