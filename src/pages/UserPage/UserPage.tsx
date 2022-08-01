import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const UserPage = () => {
 const { id } = useParams();

 const nameArr = id?.split("-");

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
    <Typography>{nameArr && nameArr[0]}</Typography>
    <Typography>{nameArr && nameArr[1]}</Typography>
   </Box>
  </Container>
 );
};

export default UserPage;
