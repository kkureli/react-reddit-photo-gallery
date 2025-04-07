import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { fetchRedditImages } from "../../api/ApiEndpointHelper";
import { ImageData } from "../../types/types";
import { useNavigate } from "react-router-dom";

const useHomeHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = useCallback(
    debounce(async (keyword: string) => {
      if (keyword.length < 3) return;
      setLoading(true);
      setError(null);
      try {
        const results = await fetchRedditImages(keyword);
        setImages(results);
      } catch (err: any) {
        if (err?.response?.data?.message) {
          setError(err.response.data.message);
          return;
        }
        setError("An error occurred while fetching images.");
        console.log("err", err);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  const onClickCard = (card: ImageData) => {
    navigate(`/photo/${card.id}`, { state: { card } });
  };

  useEffect(() => {
    if (!searchInput) {
      setError(null);
      setImages([]);
    }
  }, [searchInput]);

  return {
    loading,
    error,
    images,
    handleSearch,
    searchInput,
    setSearchInput,
    onClickCard,
  };
};

export default useHomeHook;
