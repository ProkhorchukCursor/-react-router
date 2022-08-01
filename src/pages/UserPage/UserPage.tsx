import { Box, Container } from "@mui/material";

const UserPage = () => {
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
