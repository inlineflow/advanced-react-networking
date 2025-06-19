// import { useEffect, useState } from "react";
import type { User } from "./types/user";
// import { get } from "./utils";

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
          <div>
            <img
              src={`https://i.pravatar.cc/150?u=${friend.id}`}
              alt={`User ${friend.name} avatar`}
            />
            <span>{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
