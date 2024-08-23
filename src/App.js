import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarProvider } from "notistack";

import Home from "./pages/home";
import Play from "./pages/play";
import Game from "./pages/game";
import Leaderboard from "./pages/Leaderboard";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

function App() {


  const client = createThirdwebClient({
    clientId: "3969c483fbebee56918ad2b594349ec8",
  })

  return (
    <>
      <ThirdwebProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/play" element={<Play />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={3000} draggableDirection="x" />
      </ThirdwebProvider>

    </>
  );
}

export default App;
