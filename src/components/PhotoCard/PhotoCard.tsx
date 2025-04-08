import React from "react";
import { ImageData } from "../../types/types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { lightThemeColors, darkThemeColors } from "../../theme/colors";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";
import { useTranslation } from "react-i18next";
import "./PhotoCard.css"; // Import the CSS file

interface PhotoCardProps {
  image: ImageData;
  isDarkTheme?: boolean;
  onClickCard: (image: ImageData) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image, onClickCard }) => {
  const { isDarkTheme } = useIsDarkThemeHook();
  const themeColors = isDarkTheme ? darkThemeColors : lightThemeColors;
  const { t } = useTranslation();
  const imageUrl = image.thumbnail;
  const title = image.title;
  const author = image.author;
  const subreddit = image.subreddit;
  const ups = image.ups || 0;
  const isMobile = useMediaQuery("(max-width:600px)");

  const truncatedTitle =
    title.length > 50 ? `${title.substring(0, 50)}...` : title;

  if (isMobile) {
    return (
      <Card className="mobileCard" onClick={() => onClickCard(image)}>
        <CardMedia component="img" image={imageUrl} alt={title} />
      </Card>
    );
  }

  return (
    <Card
      className="desktopCard"
      style={{
        backgroundColor: themeColors.cardBackground,
        color: themeColors.cardText,
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="truncatedTitle"
        >
          {truncatedTitle}
        </Typography>
        <Typography variant="body2">
          {t("author")}: {author}
        </Typography>
        <Typography variant="body2">
          {t("subreddit")}: {subreddit}
        </Typography>
        <Typography variant="body2">
          {t("ups")}: {ups}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onClickCard(image)} size="small" color="primary">
          {t("go_to_detail")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
