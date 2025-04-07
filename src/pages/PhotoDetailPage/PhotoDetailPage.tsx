import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageData } from "../../types/types";
import ThemedContainer from "../../components/ThemedContainer/ThemedContainer";
import DetailCard from "../../components/DetailCard/DetailCard";
import Header from "../../components/Header/Header";

const PhotoDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { card } = state as {
    card: ImageData;
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <ThemedContainer>
      <Header />
      <DetailCard card={card} onBack={onBack} />
    </ThemedContainer>
  );
};

export default PhotoDetailPage;
