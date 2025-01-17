import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./routes/Layout";
import Home from "./routes/home";
import EventPage from "./routes/event-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
