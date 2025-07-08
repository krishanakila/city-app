import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, Heart } from "lucide-react";

export default function OfferDetail() {
const { id } = useParams();
const navigate = useNavigate();
const [activeIndex, setActiveIndex] = useState(0);


const offerData: Record<
string,
{
title: string;
description: string;
image: string;
logo: string;
category: string;
thumbnails: string[];
}>= {
"parfaiteiria-bel": {
title: "Parfaiteiria Bel",
description:
"Enjoy an instant 10% discount on purchases of ¥8,000 with your card.",
image: "/parfait-md.png",
logo: "/parfait-md.png",
category: "Dessert",
thumbnails: [
"/thum-1.png",
"/thum-2.png",
"/thum-3.png",
"/thum-4.png",
],
},

"muji": {
title: "Parfaiteiria Bel",
description:
"Enjoy an instant 10% discount on purchases of ¥8,000 with your card.",
image: "/dessert.jpg",
logo: "/round-profile.png",
category: "Dessert",
thumbnails: [
"/thum-1.png",
"/thum-2.png",
"/thum-3.png",
"/thum-4.png",
],
},

"shiseido": {
title: "Parfaiteiria Bel",
description:
"Enjoy an instant 10% discount on purchases of ¥8,000 with your card.",
image: "/shiseido.png",
logo: "/round-profile.png",
category: "Dessert",
thumbnails: [
"/thum-1.png",
"/thum-2.png",
"/thum-3.png",
"/thum-4.png",
],
},

"uniqlo": {
title: "Parfaiteiria Bel",
description:
"Enjoy an instant 10% discount on purchases of ¥8,000 with your card.",
image: "/kose.png",
logo: "/round-profile.png",
category: "Dessert",
thumbnails: [
"/thum-1.png",
"/thum-2.png",
"/thum-3.png",
"/thum-4.png",
],
},

};

const offer = id ? offerData[id.toLowerCase()] : null;
if (!offer)
return (
<div className="p-6 text-center text-gray-500">Offer not found.</div>
);

return (
<div className="relative min-h-screen text-white">
{/* Background Image */}
<img src={offer.image} alt={offer.title} className="absolute top-0 left-0 w-full h-full object-cover z-[9]" />
  {/* Top Bar */}
  <div className="absolute top-5 left-4 right-4 flex justify-between items-center z-20 floting-back-btn">
    <button
      onClick={() => navigate("/")}
      className="bg-white text-black rounded-full p-2 shadow focus:outline-none"
      aria-label="Back"
    >
      <ChevronLeft size={20} />
    </button>
    <button
      className="bg-white/80 text-black rounded-full p-2"
      aria-label="Like"
    >
      <Heart size={18} />
    </button>
  </div>

  {/* Category Label */}
  <div className="absolute top-16 w-full flex justify-center z-10">
    <span className="text-sm px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
      {offer.category}
    </span>
  </div>

  {/* Bottom Info Panel */}
  <div className="absolute bottom-0 w-full px-4 pb-8 pt-16 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
    {/* Thumbnails */}
    <div className="flex items-center space-x-2 overflow-x-auto pb-3">
      {offer.thumbnails.map((thumb, index) => (
        <img
          key={index}
          src={thumb}
          alt={`Thumbnail ${index + 1}`}
          className={`w-14 h-14 rounded-lg object-cover border-2 cursor-pointer ${
            index === activeIndex
              ? "border-orange-500"
              : "border-transparent"
          }`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
      <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-md text-sm font-medium">
        +5
      </div>
    </div>

    {/* Info */}
    <div className="flex items-center mb-2">
      <img
        src={offer.logo}
        alt={offer.title}
        className="w-10 h-10 rounded-full object-cover mr-3 border border-white"
      />
      <div>
        <h2 className="text-base font-semibold">{offer.title}</h2>
      </div>
    </div>
    <p className="text-sm text-white/80">
      {offer.description.replace(
        /10% discount/,
        (match) => `\u0001${match}\u0001`
      ).split("\u0001").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-white">{part}</strong>
        ) : (
          part
        )
      )}
    </p>

    {/* Pagination dots */}
    <div className="flex justify-center mt-4 space-x-1 cursor-pointer">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i === activeIndex ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  </div>
</div>

);
}