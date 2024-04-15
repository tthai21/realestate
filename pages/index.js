import React from "react";
import useSWR from "swr";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: houseList, error } = useSWR("/api/houseList", fetcher);
  const likedHouses = useSelector((state) => state.user.likedHouses);
  const updatedHouseList = houseList?.map((house) => ({
    ...house,
    isLiked: likedHouses.includes(house.id),
  }));

  if (error) return <Error />;
  if (!houseList) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-[70%] mx-auto mb-10">
      {updatedHouseList.map((house) => (
        <Card key={house.id} house={house} />
      ))}
    </div>
  );
}
