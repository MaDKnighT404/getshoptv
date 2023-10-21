import React, { useContext } from "react";

interface VideoContextProps {
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const VideoContext = React.createContext<VideoContextProps | undefined>(
  undefined
);
export function useVideoContext() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
}

export default VideoContext;
