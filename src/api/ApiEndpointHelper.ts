import HttpClient from "./httpclient";
import { ImageData } from "../types/types";
const LIMIT = 20;

const fetchRedditImages = async (
  keyword: string,
  after: string | null = null
): Promise<{ images: ImageData[]; after: string | null }> => {
  const response = await HttpClient.Get(
    `/r/${keyword}/top.json?limit=${LIMIT}&after=${after}`
  );
  const posts = response.data.data.children;
  const afterToken = response.data.data.after;

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

  return { images: imageData, after: afterToken };
};

export { fetchRedditImages };
