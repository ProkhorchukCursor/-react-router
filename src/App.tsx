import { Route, HashRouter, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import {
 ContactsPage,
 HomePage,
 PhotosPage,
 PostsPage,
 UserPage,
} from "./pages";

import { Header } from "./components";

function App() {
 return (
  <Container>
   <HashRouter>
    <Header />
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/posts" element={<PostsPage />} />
     <Route path="/photos" element={<PhotosPage />} />
     <Route path="/contacts" element={<ContactsPage />} />
     <Route path="/contacts/:id" element={<UserPage />} />
    </Routes>
   </HashRouter>
  </Container>
 );
}

export default App;
