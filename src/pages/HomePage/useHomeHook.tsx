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
  const [after, setAfter] = useState<string | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const navigate = useNavigate();

  const fetchImages = async (
    keyword: string,
    afterToken: string | null = null
  ) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchRedditImages(keyword, afterToken);
      setImages((prevImages) =>
        afterToken ? [...prevImages, ...results.images] : results.images
      );
      setAfter(results.after);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "An error occurred while fetching images."
      );
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(
    debounce(async (keyword: string) => {
      if (keyword.length < 3) return;
      setAfter(null);
      await fetchImages(keyword, null);
    }, 500),
    []
  );

  const fetchMoreImages = async () => {
    if (!searchInput || !after || isFetchingMore) return;
    setIsFetchingMore(true);
    try {
      await fetchImages(searchInput, after);
    } finally {
      setIsFetchingMore(false);
    }
  };

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
    fetchMoreImages,
    isFetchingMore,
  };
};

export default useHomeHook;
