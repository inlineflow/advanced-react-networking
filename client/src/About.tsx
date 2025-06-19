import type { User } from "./types/user";

export const About = ({ user }: { user: User }) => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt={`${user.name}'s Avatar`} />
      </div>
      <div>{user.name}</div>
      <p>{user.bio}</p>
    </div>
  );
};
