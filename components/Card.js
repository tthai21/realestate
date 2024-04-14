import React from "react";
import AlertDialogUser from "./AlertDialog";

const Card = ({ house }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <AlertDialogUser src={house.imageUrl} id={house.id} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Price: ${house.price}</div>
        <p className="text-gray-700 text-base mb-2 line-clamp-2">
          {house.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base">Bedrooms: {house.bedrooms}</p>
        <p className="text-gray-700 text-base">Toilets: {house.toilets}</p>
        <p className="text-gray-700 text-base">Parking: {house.parking}</p>
      </div>
    </div>
  );
};

export default Card;
