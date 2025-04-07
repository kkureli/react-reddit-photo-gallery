import { Alert, CircularProgress, Grid } from "@mui/material";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import useHomeHook from "./useHomeHook";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/Searchbar/Searchbar";
import ThemedTypography from "../../components/ThemedContainer/ThemedTypography";
import ThemedContainer from "../../components/ThemedContainer/ThemedContainer";
import "./HomePage.css";

const HomePage = () => {
  const {
    error,
    handleSearch,
    images,
    loading,
    searchInput,
    setSearchInput,
    onClickCard,
    isFetchingMore,
  } = useHomeHook();
  const { t } = useTranslation();

  return (
    <ThemedContainer>
      <Header />
      <ThemedTypography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        {t("title")}
      </ThemedTypography>
      <SearchBar
        input={searchInput}
        onChange={(val) => {
          handleSearch(val);
          setSearchInput(val);
        }}
      />
      {!searchInput && (
        <ThemedTypography
          variant="h6"
          component="p"
          textAlign="center"
          sx={{ marginTop: "20px" }}
        >
          {t("searchPrompt")}{" "}
        </ThemedTypography>
      )}
      {loading && !images.length && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid marginTop={4} container spacing={3}>
        {images.map((img) => (
          <PhotoCard
            key={img.id + img.ups}
            image={img}
            onClickCard={onClickCard}
          />
        ))}
      </Grid>
      {isFetchingMore && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
    </ThemedContainer>
  );
};

export default HomePage;
