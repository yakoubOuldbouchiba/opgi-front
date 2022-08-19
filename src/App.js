import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "./pages/presntation/Presentation";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import FondDocumentaire from "./pages/FondDocumentaire";
import Annuaire from "./pages/Annuaire";
import Faq from "./pages/Faq";
import Bien from "./pages/Bien/bien";
import SharedLayout from "../src/sharedLayout";
function App() {
  const [bien, setBien] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Presentation />} />
          <Route path="/FondDocumentaire" element={<FondDocumentaire />} />
          <Route path="/Annuaire" element={<Annuaire />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Login" element={<Login setBien={setBien} />} />
        <Route path="/Dashbord" element={<Bien bien={bien} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
