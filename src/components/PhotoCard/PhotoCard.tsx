import React from "react";
import { ImageData } from "../../types/types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { lightThemeColors, darkThemeColors } from "../../theme/colors";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

interface PhotoCardProps {
  image: ImageData;
  isDarkTheme?: boolean;
  onClickCard: (image: ImageData) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image, onClickCard }) => {
  const { isDarkTheme } = useIsDarkThemeHook();
  const themeColors = isDarkTheme ? darkThemeColors : lightThemeColors;

  const imageUrl = image.thumbnail; // Görsel URL'si
  const title = image.title || "No Title";
  const author = image.author || "Unknown";
  const subreddit = image.subreddit || "Unknown subreddit";
  const ups = image.ups || 0;

  const truncatedTitle =
    title.length > 50 ? `${title.substring(0, 50)}...` : title;

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        margin: "auto",
        backgroundColor: themeColors.cardBackground,
        color: themeColors.cardText,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontSize: "0.9rem" }}
        >
          {truncatedTitle}
        </Typography>
        <Typography variant="body2">By: {author}</Typography>
        <Typography variant="body2">Subreddit: {subreddit}</Typography>
        <Typography variant="body2">Ups: {ups}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onClickCard(image)} size="small" color="primary">
          Detaya Git
        </Button>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
