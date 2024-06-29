import React from "react";
import ReactDOM from "react-dom";
import { LanguageProvider } from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import "./index.css";
import "aos/dist/aos.css";
// PAGES
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Redikt from "./pages/rediktPage/Redikt";
import Books from "./pages/booksPage/Books";
import Send from "./pages/sendPage/Send";
import Contact from "./pages/contactPage/Contact";
import Arxiv from "./pages/arxivPage/Arxiv";
import SelectedBook from "./pages/selectedBookPage/SelectedBook";

ReactDOM.render(
  <LanguageProvider>
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="redikt" element={<Redikt />} />
          <Route path="book" element={<Books />} />
          <Route path="book/:id" element={<SelectedBook />} />
          <Route path="send" element={<Send />} />
          <Route path="contact" element={<Contact />} />
          <Route path="arxiv" element={<Arxiv />} />
        </Route>
      </Routes>
    </Router>
  </LanguageProvider>,
  document.getElementById("root")
);
