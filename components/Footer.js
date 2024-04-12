import React from "react";
import Link from "next/link";

const locations = [
  "NSW",
  "VIC",
  "QLD",
  "WA",
  "SA",
  "TAS",
  "ACT",
  "NT",
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Hobart",
  "Canberra",
  "Darwin",
];

const Footer = () => (
  <footer className="bg-secondary text-white py-4">
    <div className="container mx-auto px-4">
      <ul className="flex flex-wrap justify-center">
        {locations.map((location) => (
          <li key={location} className="mx-2">
            <Link href={`/real-estate-${location.toLowerCase()}`}>
              {`Real estate ${location}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
