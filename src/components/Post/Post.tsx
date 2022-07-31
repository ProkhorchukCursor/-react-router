import {
 Avatar,
 Box,
 Card,
 CardContent,
 CardHeader,
 CardMedia,
 Typography,
} from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import DirectionsIcon from "@mui/icons-material/Directions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IAuthor } from "../../types";

interface IProps {
 author: IAuthor;
 content: string;
 image: string;
 date: string;
 comments?: number;
 reposts?: number;
 likes?: number;
}

const Post = ({
 author,
 content,
 image,
 date,
 comments = 482,
 reposts = 146,
 likes = 887,
}: IProps) => {
 const { name, photo, nickname } = author;

 return (
  <Card sx={{ maxWidth: "800px", my: 2 }}>
   <CardHeader
    avatar={<Avatar src={photo} alt={nickname} />}
    title={name}
    subheader={
     <Box>
      <Typography variant="body2" color="text.secondary">
       {nickname}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {date}
      </Typography>
     </Box>
    }
   />
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {content}
    </Typography>
   </CardContent>
   {image && <CardMedia component="img" image={image} alt="Content" />}
   <CardContent>
    <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
     <Box sx={{ display: "flex" }}>
      <CommentIcon />
      <Typography sx={{ ml: 2 }}>{comments}</Typography>
     </Box>
     <Box sx={{ display: "flex" }}>
      <DirectionsIcon />
      <Typography sx={{ ml: 2 }}>{reposts}</Typography>
     </Box>
     <Box sx={{ display: "flex" }}>
      <ThumbUpIcon />
      <Typography sx={{ ml: 2 }}>{likes}</Typography>
     </Box>
     <FavoriteBorderIcon />
    </Box>
   </CardContent>
  </Card>
 );
};

export default Post;
