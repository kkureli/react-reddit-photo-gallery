import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { fetchRedditImages } from "../../api/ApiEndpointHelper";
import { ImageData } from "../../types/types";

const useHomeHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const [searchInput, setSearchInput] = useState("");
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
  };
};

export default useHomeHook;
