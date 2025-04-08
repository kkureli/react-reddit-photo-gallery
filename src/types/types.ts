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
      e: string;
      m: string;
      s: {
        u: string;
        x: number;
        y: number;
      };
    };
  };
  gallery_data?: {
    items: {
      media_id: string;
    }[];
  };
};
