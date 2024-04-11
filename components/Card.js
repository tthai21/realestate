import React from "react";

const Card = ({ realEstate }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
      <img
        className="w-full"
        src={realEstate.imageUrl}
        alt={`House ${realEstate.id}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Price: ${realEstate.price}</div>
        <p className="text-gray-700 text-base mb-2">{realEstate.description}</p>
        <p className="text-gray-700 text-base">
          Bedrooms: {realEstate.bedrooms}
        </p>
        <p className="text-gray-700 text-base">Toilets: {realEstate.toilets}</p>
        <p className="text-gray-700 text-base">Parking: {realEstate.parking}</p>
      </div>
    </div>
  );
};

export default Card;
