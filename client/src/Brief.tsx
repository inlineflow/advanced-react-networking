import type { User } from "./types/user";

export const Brief = ({ user }: { user: User }) => {
  return (
    <div>
      <div>
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`User ${user.name} avatar`}
        />
      </div>
      <div>
        <div>{user.name}</div>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};
