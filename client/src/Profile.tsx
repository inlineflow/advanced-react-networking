import { useEffect, useState } from "react";
import type { User } from "./types/user";
import { get } from "./utils";
import { About } from "./About";
import { Friends } from "./Friends";
import { Feeds } from "./Feeds";

export const Profile = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [user, setUser] = useState<User | undefined>();
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserAndFriends = async () => {
      try {
        setLoading(true);
        const [userData, friendsData] = await Promise.all([
          get<User>(`/users/${id}`),
          get<User[]>(`/users/${id}/friends`),
        ]);
        setUser(userData);
        setFriends(friendsData);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndFriends();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {user && <About user={user} />}
      <Friends friends={friends} />
      {user && <Feeds category={user.interests[0]} />}
    </>
  );
};
