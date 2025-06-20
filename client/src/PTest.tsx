import useSWR from "swr";
import { fetcher } from "./utils";

export function PTest() {
  const { data, error, isLoading } = useSWR("/users/u1", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data.name}</div>;
}
