import { useEffect, useState } from "react";
import type { Feed } from "./types/user";
import { get } from "./utils";

export const Feeds = ({ category }: { category: string }) => {
  const [loading, setLoading] = useState(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      const data = await get<Feed[]>(`/articles/${category}`);

      setLoading(false);
      setFeeds(data);
    };

    fetchFeeds();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Your Feeds</h2>
      <div>
        {feeds.map((feed) => (
          <>
            <h3>{feed.title}</h3>
            <p>{feed.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};
