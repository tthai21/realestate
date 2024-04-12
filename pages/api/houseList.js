export default function handler(req, res) {
  const houseList = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 722000,
      description: "Sleek urban loft with industrial chic design.",
      bedrooms: 3,
      toilets: 2,
      parking: 2,
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1083000,
      description: "Historic Victorian home with ornate detailing.",
      bedrooms: 4,
      toilets: 2,
      parking: 3,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4769000,
      description: "Chic loft apartment in a converted warehouse.",
      bedrooms: 2,
      toilets: 3,
      parking: 2,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 356000,
      description: "Charming countryside cottage with a spacious garden.",
      bedrooms: 3,
      toilets: 3,
      parking: 2,
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2955000,
      description: "Rustic log cabin overlooking a tranquil lake.",
      bedrooms: 2,
      toilets: 2,
      parking: 3,
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2620000,
      description: "Mountain retreat surrounded by nature's beauty.",
      bedrooms: 2,
      toilets: 2,
      parking: 2,
    },
    {
      id: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 732000,
      description: "Charming countryside cottage with a spacious garden.",
      bedrooms: 4,
      toilets: 3,
      parking: 2,
    },
    {
      id: 8,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1562000,
      description: "Contemporary townhouse with stylish interiors.",
      bedrooms: 4,
      toilets: 2,
      parking: 2,
    },
    {
      id: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 825000,
      description: "Contemporary townhouse with stylish interiors.",
      bedrooms: 2,
      toilets: 2,
      parking: 2,
    },
  ];

  res.status(200).json(houseList);
}
