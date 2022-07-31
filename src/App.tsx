import React from "react";
import { Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import { ContactsPage, HomePage, PhotosPage, PostsPage } from "./pages";

import { Header } from "./components";

function App() {
 return (
  <Container>
   <Header />
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/photos" element={<PhotosPage />} />
    <Route path="/contacts" element={<ContactsPage />} />
   </Routes>
  </Container>
 );
}

export default App;
