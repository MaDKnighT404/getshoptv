import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface VideoContextProps {
  currentTime: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);
export function useVideoContext() {
  const context = useContext(VideoContext);
  return context;
}

export default VideoContext;
