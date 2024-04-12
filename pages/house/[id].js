import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const HouseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Assume `realEstates` is your data source
  const house = realEstates.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{house.description}</title>
      </Head>
      <div className="max-w-lg mx-auto">
        <img
          className="w-full h-64 object-cover rounded-lg mb-4"
          src={house.imageUrl}
          alt={`House ${house.id}`}
        />
        <div className="px-4">
          <h1 className="text-2xl font-bold mb-2">{house.description}</h1>
          <p className="text-gray-700 mb-2">Price: ${house.price}</p>
          <p className="text-gray-700 mb-2">Bedrooms: {house.bedrooms}</p>
          <p className="text-gray-700 mb-2">Toilets: {house.toilets}</p>
          <p className="text-gray-700 mb-2">Parking: {house.parking}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailPage;
