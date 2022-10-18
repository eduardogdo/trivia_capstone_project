import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container maxWidth={"lg"}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
