import { Box, Container } from "@mui/material";

import { Post } from "../../components";

import { ANAKIN_IMAGE, RAY_IMAGE } from "../../constants";

const PostsPage = () => {
 return (
  <Container>
   <Box
    sx={{
     py: 2,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    <Post
     author={{
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
     }}
     content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
     image={RAY_IMAGE}
     date={"26 февр."}
    />
    <Post
     author={{
      name: "Ray Skywalker",
      photo: RAY_IMAGE,
      nickname: "@ray",
     }}
     content="Hi. I am a new Skywalker"
     image={RAY_IMAGE}
     date={"31 февр."}
    />
   </Box>
  </Container>
 );
};

export default PostsPage;
