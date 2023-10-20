import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <main className="flex h-screen min-w-[300px] flex-col">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<VideoPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
