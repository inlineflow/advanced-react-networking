import {
  HeroUIProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import type { User } from "./types/user";
import { Brief } from "./Brief";
import React, { Suspense } from "react";
import { preload } from "swr";
// import { get } from "./utils.ts";
import { getUserDetail } from "./api.ts";

const UserDetailCard = React.lazy(() => import("./UserDetailCard.tsx"));

const Friend = ({ user }: { user: User }) => {
  const handleMouseEnter = () => {
    preload(`/user/${user.id}/details`, () => getUserDetail(user.id));
  };

  return (
    <HeroUIProvider>
      <Popover placement="right" showArrow offset={10}>
        <PopoverTrigger>
          <button onMouseEnter={handleMouseEnter}>
            <Brief user={user} />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Suspense fallback={<div>Loading from suspense...</div>}>
            <UserDetailCard id={user.id} />
          </Suspense>
        </PopoverContent>
      </Popover>
    </HeroUIProvider>
  );
};

export default Friend;
