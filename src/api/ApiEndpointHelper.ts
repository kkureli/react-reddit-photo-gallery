import HttpClient from "./httpclient";
import { ImageData } from "../types/types";

const fetchRedditImages = async (keyword: string): Promise<ImageData[]> => {
  const response = await HttpClient.Get(`/r/${keyword}/top.json`);
  const posts = response.data.data.children;

  const imageData: ImageData[] = posts.map((post: any) => {
    const {
      title,
      author,
      ups,
      thumbnail,
      url,
      media_metadata,
      subreddit,
      id,
      selftext,
    } = post.data;

    return {
      title,
      subreddit,
      author,
      ups,
      thumbnail,
      url,
      media_metadata,
      id,
      selftext,
    };
  });

  return imageData;
};

export { fetchRedditImages };
