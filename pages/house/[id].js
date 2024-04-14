// pages/[id].js
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PropertyDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: house, error } = useSWR(`/api/house/${id}`, fetcher);

  if (error) return <Error />;
  if (!house) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[70%] mx-auto mt-28 mb-60">
      <div>
        <img
          src={house.imageUrl}
          alt={house.name}
          className="w-[500px] h-[300x] "
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p>Price: ${house.price}</p>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Toilets: {house.toilets}</p>
          <p>Parking: {house.parking}</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">{house.name}</h1>
        <p>{house.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
