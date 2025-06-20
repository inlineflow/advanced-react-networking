// import { useEffect, useState } from "react";
import type { UserDetail } from "./types/user";
import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { get } from "./utils";
import useSWR from "swr";
import { getUserDetail } from "./api";

const UserDetailCard = ({ id }: { id: string }) => {
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [detail, setDetail] = useState<UserDetail | undefined>();
  const { data: detail, isLoading: loading } = useSWR(
    `/user/${id}/details`,
    () => getUserDetail(id)
  );

  //   useEffect(() => {
  //     const fetchFeeds = async () => {
  //       setLoading(true);
  //       const data = await get<UserDetail>(`/users/${id}/details`);

  //       setLoading(false);
  //       setDetail(data);
  //     };

  //     fetchFeeds();
  //   }, [id]);

  if (loading || !detail) {
    return <div>Loading...</div>;
  }

  return (
    <Card shadow="none">
      <CardHeader>
        <div>
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`https://i.pravatar.cc/150?u=${detail.id}`}
          />
          <div>
            <h4>{detail.name}</h4>
            <p>{detail.twitter}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>{detail.bio}</p>
      </CardBody>
      <CardFooter>
        <div>
          <p>
            <a href={detail.homepage}>{detail.homepage}</a>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserDetailCard;
