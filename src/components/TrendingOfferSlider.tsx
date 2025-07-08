import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";

const offers = [
{
id: "parfaiteiria-bel",
title: "Parfaiteiria Bel",
city: "Tokyo",
rating: 5.0,
reviews: 120,
image: "/trending/parfait.jpg",
},
{
id: "muji",
title: "Muji",
city: "Osaka",
rating: 4.5,
reviews: 89,
image: "/trending/muji.png",
},
{
id: "uniqlo",
title: "Kosé",
city: "Kyoto",
rating: 4.8,
reviews: 102,
image: "/trending/kose.png",
},
];

export default function TrendingOfferSlider() {
const [index, setIndex] = useState(0);
const navigate = useNavigate();

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % offers.length);
  }, 2500); // change every 4 seconds

  return () => clearInterval(interval); 
}, []);



return (
<div className="relative w-full">

<div className="relative h-92 rounded-2xl overflow-hidden shadow-lg">
<img
  src={offers[index].image}
  alt={offers[index].title}
  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
/>

    
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-4 flex flex-col justify-end">
     
      <div className="absolute top-3 left-3">
        <img src="../logo.png" alt="main logo"/>
      </div>
      <div className="absolute top-3 right-3">
        <button className="text-white text-xl font-semibold">×</button>
      </div>

      <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
        {offers[index].city}
      </span>
      <h3 className="text-lg font-bold text-white leading-tight mb-1">
        {offers[index].title}
      </h3>
      <div className="flex items-center text-xs text-white/80 gap-2 mb-3">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        {offers[index].rating}
        <span>•</span>
        <span>{offers[index].reviews} reviews</span>
      </div>
      <button
        onClick={() => navigate(`/offer/${offers[index].id}`)}
        className="w-full primary-btn flex items-center justify-center gap-2"
      >
        See more <ChevronRight size={16} />
      </button>
    </div>
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center mt-2 space-x-1">
    {offers.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
          i === index ? "bg-orange-500" : "bg-gray-300"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</div>



);
}