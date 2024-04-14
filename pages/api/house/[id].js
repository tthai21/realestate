export default function handler(req, res) {
  const houseList = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 722000,
      description:
        "Step into the epitome of modern living as you explore this captivating 4-bedroom, 2-bathroom sanctuary, where style and comfort intertwine seamlessly. Admire the majestic mountain vistas from your own backyard, offering a serene retreat just beyond your doorstep.4 Bedrooms: Experience the luxury of ample space and privacy with four well-appointed bedrooms, each thoughtfully designed to cater to your comfort and relaxation.2 Bathrooms: Indulge in the convenience of two elegantly crafted bathrooms, offering both functionality and sophistication to meet the needs of your household.",
      bedrooms: 3,
      toilets: 2,
      parking: 2,
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1083000,
      description:
        "Historic Victorian home with ornate detailing. Welcome to your new home in Melton West! This inviting property boasts 3 bedrooms, 2 bathrooms, and double living areas, providing a perfect blend of space and comfort. Situated in a prime location, this residence offers a lifestyle of convenience and modern living.As you step inside, you'll be greeted by a warm and spacious atmosphere, with two separate living areas providing flexibility for both relaxation and entertainment. The open-concept design seamlessly connects the living, dining, and kitchen spaces, creating an ideal setting for family gatherings or socializing with friends.The well-designed kitchen is a focal point of the home, featuring ample counter space and stylish cabinetry. This space is ready to accommodate your culinary adventures while maintaining a modern and sleek aesthetic.",
      bedrooms: 4,
      toilets: 2,
      parking: 3,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4769000,
      description:
        "This rare block of land located in the suburb of Harkness, this parcel of land sits at a very rare 660m2 (approx.) with potential to subdivide STCA. Perfect opportunity for investors, families or first home buyers. Walking distance to parks, public transport and Melton's beautiful Navan Park offering family picnic locations, playground, off leash dog park, Navan Park Lake and walking tracks!Just minutes from Woodgrove Shopping Centre and some of Melton's most sort after schools including Wedge Park Primary School and the Catholic Regional College.On an ideal block size of 660m2 (approx.), this block features a 17.3m frontage and 38.6m depth (approx.) while also featuring a north facing block making this the perfect parcel of land to build your dream home or investment.      This great opportunity will not last long so call today to make your enquiry.",
      bedrooms: 2,
      toilets: 3,
      parking: 2,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 356000,
      description:
        "Ideally located in a sought-after pocket of Harkness this low maintenance property is in close proximity to all amenities including; public transport, schools, shopping, parklands, walking tracks and easy freeway access. This home provides the perfect opportunity for first home buyers, investors and downsizers alike.Upon entering this welcoming home, you are greeted by a large master bedroom, complete with ensuite and walk-in wardrobe, throughout the home you are met with a further two great sized bedrooms containing built-in wardrobes that are serviced by a bright central bathroom.The central hub of the home is highlighted by a stunning vinyl wrapped kitchen, showcasing: granite benchtops, modern appliances, overhead cupboards and corner pantry. This oversees the open plan living/dining area and though to the backyard.",
      bedrooms: 3,
      toilets: 3,
      parking: 2,
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2955000,
      description:
        "Introducing this exceptional property to market, Anthony Stevens is extremely proud to present Woodlands on the north-western outskirts of Melbourne's CBD, built on a grand scale, the property is architecturally designed to immerse yourself into the quintessential Australian nature. From inside the light filled home, every aspect provides a different view, your open plan living and a protected alfresco outdoor dining area with luxurious automatic roller blinds, gives you the sense of being outside with the comforts of inside. Surrounded by a native Australian garden with an abundance of wildflowers through spring and cover from hundreds of gum trees and wattles, you will quickly notice how the Australian flora and fauna become part of your daily life. You will never want to leave and may consider working from home, for good. Built with careful consideration to the sensory experience you see yourself in bed each morning listening to birds singing and marvel at the awe-inspiring view, wander through the native garden nursing a warm cuppa, escape with a book in the cosy reading nook, sit by the fire pit with your loved ones, indulging in local cheeses and wine, then gaze into the glittering night sky as you soak in the outdoor tub.",
      bedrooms: 2,
      toilets: 2,
      parking: 3,
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2620000,
      description:
        "Fletchers Real Estate proudly presents 7 Highfield Way Kurunjang. Step into an exquisite realm of luxury, where sophistication meets thoughtful design in this expansive 5-bedroom haven. Beyond the grandeur of French doors lies a foyer adorned with high ceilings, recessed lighting, and impeccably designed tiled flooring.This residence unfolds with five spacious bedrooms, including a master suite that epitomizes opulence, featuring a walk-in robe and a lavish ensuite. Each of the three bathrooms showcases fully tiled showers and generously sized upgraded tiles, creating an atmosphere of indulgence. Throughout the house, high-quality 2-pack doors add a touch of elegance, and the red oak timber kitchen cabinets elevate the culinary space.Nestled seamlessly within this luxury abode is a fully contained granny flat—an understated retreat with its own kitchen, bedroom, bathroom, and living space—a hidden gem catering to versatile living arrangements.The culinary heart of the home, the main kitchen, stands as a masterpiece with black galaxy granite benchtops, top-tier stainless steel appliances, and an adjoining butler's pantry for added convenience. The house enjoys the luxury of a refrigerated cooling system, gas fireplaces, roller shutters, and designer bulkheads in the hallway that contribute to the exclusive ambiance of the interiors.",
      bedrooms: 2,
      toilets: 2,
      parking: 2,
    },
    {
      id: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 732000,
      description:
        "Fletchers Melton proudly presents this magnificent double-storey residence nestled in the heart of Melton, boasting an expansive land size of 964m2. This fully renovated home epitomizes luxury living with its spacious layout, extensive amenities, and thoughtful design.Upon arrival, you'll be captivated by the well-established facade and low-maintenance landscaping, setting the tone for what lies within. The property offers ample parking, with a four-car garage on the left and additional parking space for two cars on the right, thanks to its advantageous corner block position.Step through the inviting double doors into a grand foyer, where a sprawling living area awaits to the right, offering a perfect space for relaxation and entertainment. To the left, a study room provides a quiet retreat, accompanied by a convenient powder room.Continuing through the home, you'll discover an open-plan kitchen seamlessly connecting to a formal living and dining area, creating an ideal setting for gatherings and family meals. The adjacent rumpus room extends the entertainment options, leading to the garage, currently utilized as a home-based business showroom. This versatile space presents opportunities for conversion into a granny flat or a home office setup.",
      bedrooms: 4,
      toilets: 3,
      parking: 2,
    },
    {
      id: 8,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1562000,
      description:
        "Your dream home set on an incredible 816sqm block nestled in a vibrant family neighbourhood offering space and comfort for the entire family to enjoy an amazing opportunity in a highly sought-after location. Positioned only 45 minutes from Melbourne CBD and within proximity to Woodgrove Shopping Centre and an abundance of local community shops, schools, childcare, health and medical facilities, hospitals, and other services you will have the best of everything right at your doorstep!The home welcomes you with an elegant wide entry with high ceilings that's branched out into multiple living & entertaining areas including a formal lounge, main family living & dining area that flows seemingly into the spacious kitchen, leading to an undercover outdoor entertainment area and a separate theatre room. Upstairs you will find a private retreat/rumpus with a cozy study nook.* Hosting 5-spacious bedrooms, including an over-sized master bedroom with parent's retreat, a private balcony with amazing views for those morning coffees, stunning ensuite with a double shower with twin shower heads on both sides, double vanity, spa bath, separate toilet and his & hers spacious WIR's.      * Kitchen fitted with large modern stainless-steel appliances, microwave nook and a huge walk-in pantry boasting more than enough space for all your kitchen essentials.",
      bedrooms: 4,
      toilets: 2,
      parking: 2,
    },
    {
      id: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 825000,
      description:
        "LJ Hooker Melton is thrilled to present this charming property nestled in the sought-after Kurunjang neighbourhood, boasting a generous 1513 sqm block. Discover the practicality and warmth of this five-bedroom home, featuring a comfortable master suite downstairs with a spacious ensuite and walk-in robe. The heart of the house is the bright and airy open-plan kitchen, dining, and living space. The kitchen is not only functional but also convenient, with a handy butler's pantry and quality appliances.Entertainment options abound with a roomy formal lounge at the back or a kids' retreat lounge/rumpus room for family enjoyment.Upstairs, find four more bedrooms, an additional study space, and a private theatre room equipped with a sink & snack bar.Step outside into the well-kept backyard, complete with a basketball court, playground, and a cozy alfresco area - perfect for making memories all year round. Situated conveniently close to local amenities such as shops, schools, public transport, and freeway access, this property embodies the essence of a perfect family home.Additional features include double-side access, a powder room, ducted heating, evaporative cooling, ceiling fans, ducted vacuum, an alarm system, plantation shutters, & a salon space adding to the practicality and comfort of this wonderful residence. This property strikes an ideal balance between practical living and comfort, making it an exceptional choice for families looking for a cozy and convenient home.",
      bedrooms: 2,
      toilets: 2,
      parking: 2,
    },
  ];

  const { id } = req.query;
  const house = houseList.find((house) => house.id === parseInt(id));

  if (!house) {
    res.status(404).json({ message: "House not found" });
    return;
  }

  res.status(200).json(house);
}
