import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import PhonePage from "./pages/PhonePage";
import VideoContext from "./pages/Context/VideoContext";
import { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <main className="flex h-screen min-w-[300px] flex-col">
      <VideoContext.Provider value={{ currentTime, setCurrentTime }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<VideoPage />}
            />
            <Route
              path="/phone"
              element={<PhonePage />}
            />
          </Routes>
        </BrowserRouter>
      </VideoContext.Provider>
    </main>
  );
}

export default App;
