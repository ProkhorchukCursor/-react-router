import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const UserPage = () => {
const id = useParams();
console.log(id);

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
    User
   </Box>
  </Container>
 );
};

export default UserPage;
