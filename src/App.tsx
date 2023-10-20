import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import PhonePage from "./pages/PhonePage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <main className="flex h-screen min-w-[300px] flex-col">
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
          <Route
            path="/final"
            element={<FinalPage />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
