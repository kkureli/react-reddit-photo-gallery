// src/types/reddit.ts

export type ImageData = {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  ups: number;
  thumbnail: string;
  url: string;
  selftext: string;
  media_metadata: {
    [key: string]: {
      status: string;
      e: string; // Image format (örneğin, "jpeg")
      m: string; // MIME type (örneğin, "image/jpeg")
      s: {
        u: string; // Image URL
        x: number; // Image width
        y: number; // Image height
      };
    };
  };
  gallery_data?: {
    items: {
      media_id: string;
    }[];
  };
};
