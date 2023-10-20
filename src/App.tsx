import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="flex h-screen min-w-[300px] flex-col">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<VideoPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
