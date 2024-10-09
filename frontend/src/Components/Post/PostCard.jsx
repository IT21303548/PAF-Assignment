import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const PostCard = ({item}) => {
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        // title={item.firstName + " " + item.lastName}
        // subheader={"@" + item.firstName + item.lastName}
      />

      <CardMedia
        component="img"
        height="194"
        //image={item.image}
        image="https://cdn.pixabay.com/photo/2022/01/07/01/21/girl-6920625_640.jpg"
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* {item.caption} */}Caption goes here
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="flex justify-between">
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton>{<ShareIcon />}</IconButton>

          <IconButton>{<ChatBubbleIcon />}</IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
