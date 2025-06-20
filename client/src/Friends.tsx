// import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import type { User } from "./types/user";
// import { get } from "./utils";

const Friend = lazy(() => import("./Friend"));

export const Friends = ({ friends }: { friends: User[] }) => {
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [users, setUsers] = useState<User[]>([]);

  //   useEffect(() => {
  //     const fetchFriends = async () => {
  //       setLoading(true);
  //       const data = await get<User[]>(`/users/${id}/friends`);
  //       setLoading(false);
  //       setUsers(data);
  //     };

  //     fetchFriends();
  //   }, [id]);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h2>Friends</h2>
      <div>
        {friends.map((friend) => (
          <Suspense fallback={<div>Loading friend...</div>}>
            <Friend user={friend} key={friend.id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};
