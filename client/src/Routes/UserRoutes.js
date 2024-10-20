import React from "react";
import Header from "../Site/user/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Site/user/container/Home/Home";
import Footer from "../Site/user/component/Footer/Footer";
import About from "../Site/user/container/About/About";
import Service from "../Site/user/container/Service/Service";
import Project from "../Site/user/container/Project/Project";
import Feature from "../Site/user/container/Feature/Feature";
import Team from "../Site/user/container/Team/Team";
import Faq from "../Site/user/container/Faq/Faq";

function UserRoutes(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default UserRoutes;
