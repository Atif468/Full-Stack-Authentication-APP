import Register from "./Components/register";
import Login from "./Components/login";
import LandingPage from "./Components/landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
