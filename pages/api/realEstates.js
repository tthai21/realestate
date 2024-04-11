export default function handler(req, res) {
  const descriptions = [
    "Stunning waterfront property with breathtaking views.",
    "Cozy family home in a quiet neighborhood.",
    "Luxurious modern apartment in the heart of the city.",
    "Charming countryside cottage with a spacious garden.",
    "Contemporary townhouse with stylish interiors.",
    "Rustic farmhouse with character and history.",
    "Elegant mansion with impressive architectural details.",
    "Sleek urban loft with industrial chic design.",
    "Quaint beach house steps away from the shore.",
    "Mountain retreat surrounded by nature's beauty.",
  ];
  const realEstates = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://source.unsplash.com/random/800x600?house=${index + 1}`,
    price: Math.floor(Math.random() * 5000) * 1000,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    bedrooms: Math.floor(Math.random() * 3) + 2,
    toilets: Math.floor(Math.random() * 2) + 2,
    parking: Math.floor(Math.random() * 2) + 2,
  }));

  res.status(200).json(realEstates);
}
