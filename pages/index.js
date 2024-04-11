import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [realEstates, setRealEstates] = useState([]);

  useEffect(() => {
    fetch("/api/realEstates")
      .then((response) => response.json())
      .then((data) => setRealEstates(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-[75%] mx-auto">
      {realEstates.map((realEstate) => (
        <Card key={realEstate.id} realEstate={realEstate} />
      ))}
    </div>
  );
}
