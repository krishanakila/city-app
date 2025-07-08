import { useParams, useNavigate } from "react-router-dom";
import SpecialOfferCard from "@/components/SpecialOfferCard";
import CategoryTabs from "@/components/CategoryTabs";
import CategoryCard from "@/components/CategoryCard";


export default function City() {
  const { name } = useParams(); 
  const navigate = useNavigate();

  const offers = [
    {
      id: "parfaiteiria-bel",
      title: "Get 10% discount with card",
      tag: "Dessert · Exclusive",
      image: "/parfait.png",
      btn:"Dessert",
    },
    {
      id: "muji",
      title: "Get 10% discount with card",
      tag: "Retail · Discount",
      image: "/muji.png",
      btn:"Retail",
    },
    {
      id: "shiseido",
      title: "Get 10% discount with card",
      tag: "Beauty · Exclusive",
      image: "/shiseido.png",
      btn:"Beauty",
    },
    {
      id: "uniqlo",
      title: "Get 10% discount with card",
      tag: "Retail · Limited Time",
      image: "/kose.png",
      btn:"Kose",
    },
    {
      id: "uniqlo",
      title: "Get 10% discount with card",
      tag: "Retail · Limited Time",
      image: "/kose.png",
      btn:"Kose",
    },
    {
      id: "uniqlo",
      title: "Get 10% discount with card",
      tag: "Retail · Limited Time",
      image: "/kose.png",
      btn:"Kose",
    },
  ];

  return (
    <div className="relative">
      
    <div className="mobile-header relative h-40">
      <h1 className="mobile-header__city-name typo-14-b--normal">{name}</h1>
      <img className="mobile-header__img" src="/mobile-head-b.svg" alt="mobile image header"/>
      {/* Hero image banner for city */}
      <img
        src="/tokyo-banner.jpg"
        alt={`Banner for ${name}`}
        className="mobile-header__banner w-full h-60 object-cover absolute"
      />
         <div className="absolute floting-back-btn">
          <button
            aria-label="Back to home"
            onClick={() => navigate("/")}
            className="bg-white text-black rounded-full p-2 shadow focus:outline-none"
          >
            <img src="/icons/back.png" alt="back icon"/>
          </button>
        </div>
    </div>

    <div className="body-container px-4 mt-4">
      <div className="body-container__line flex items-center justify-center"><span></span> </div>
      <h1 className="typo-14-b mb-2">Special Offers!</h1>
        <SpecialOfferCard />
        <h2 className="typo-14-b mt-6 mb-2">Explore Tokyos best category</h2>
        <CategoryTabs />
        <div className="grid grid-cols-2 gap-4 mt-4 pb-8 overflow-y-auto offer-cards">
          {offers.map((offer) => (
            <CategoryCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              tag={offer.tag}
              image={offer.image}
              btn={offer.btn}
            />
          ))}
        </div>
    </div>

   </div>
  );
}
