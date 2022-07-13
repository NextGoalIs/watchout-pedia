import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";
import styled from "@emotion/styled";

const Base = styled.div``;

function App() {
  return (
    <Base>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </Router>
    </Base>
  );
}

export default App;
