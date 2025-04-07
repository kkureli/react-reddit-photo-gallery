import React from "react";
import { ImageData } from "../../types/types";
import ThemedTypography from "../ThemedContainer/ThemedTypography";
import "./DetailCard.css";
import { useTranslation } from "react-i18next";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

interface DetailCardProps {
  card: ImageData;
  onBack: () => void;
}

const DetailCard: React.FC<DetailCardProps> = ({ card, onBack }) => {
  const { author, id, selftext, title, subreddit, thumbnail, ups } = card;
  const { t } = useTranslation();
  const { isDarkTheme } = useIsDarkThemeHook();
  return (
    <div className="detail-card" data-testid="detail-card">
      <button
        className="back-button"
        onClick={onBack}
        data-testid="back-button"
      >
        {t("back")}
      </button>
      <div className="detail-card-content">
        <div
          className={`detail-card-text ${
            isDarkTheme ? "dark-container" : "light-container"
          }`}
        >
          <ThemedTypography variant="h4" data-testid="title">
            {title}
          </ThemedTypography>
          <ThemedTypography variant="body1" data-testid="author">
            <strong>Author:</strong> {author}
          </ThemedTypography>
          <ThemedTypography variant="body1" data-testid="subreddit">
            <strong>Subreddit:</strong> {subreddit}
          </ThemedTypography>
          <ThemedTypography variant="body1" data-testid="ups">
            <strong>Ups:</strong> {ups}
          </ThemedTypography>
          <ThemedTypography variant="body1" data-testid="description">
            <strong>Description:</strong>{" "}
            {selftext || "No description available."}
          </ThemedTypography>
          <ThemedTypography variant="body1" data-testid="id">
            <strong>ID:</strong> {id}
          </ThemedTypography>
        </div>
        <div className="photo-detail-image">
          <img src={thumbnail} alt={title} data-testid="thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
