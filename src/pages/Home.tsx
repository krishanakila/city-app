import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CityCard from "@/components/CityCard";
import TrendingOfferSlider from "@/components/TrendingOfferSlider";
import { Button } from "@/components/ui/button";

export default function Home() {
  const cities = ["Hokkaido", "Tokyo", "Osaka", "Kyoto", "Fukuoka"];

  return (
    <div className="main-wrapper__body" role="main">
      <Header />
      <div className="px-4">

        <div className="row-1 flex justify-between items-center py-4">
          <h2 className="typo-14-b" id="discover-heading">
            Discover your city!
          </h2>
          <Link
            to="/city/"
            className="typo-12"
            aria-label="View all cities"
          >
            View All
          </Link>
        </div>

        <div
          className="row-2 flex space-x-4 overflow-x-auto overflow-y-hidden pt-2"
          aria-labelledby="discover-heading"
        >
          {cities.map((city) => (
            <Link
              key={city}
              to={`/city/${city}`}
              aria-label={`View offers in ${city}`}
              className=""
            >
              <CityCard name={city} image={`/cities/${city}.png`} />
            </Link>
          ))}
        </div>

        {/* Trending offer section */}
        <div className="row-3 pt-6" aria-labelledby="trending-heading">
          <h2 id="trending-heading" className="typo-14-b text-lg font-semibold mb-2">
            Trending Offer
          </h2>          
          <TrendingOfferSlider />
        </div>

        {/* Special offer section */}
        <div className="row-4 mt-6 pb-8" aria-labelledby="special-offer-heading">
          <h2 id="special-offer-heading" className="typo-14-b mb-2">
            Add card for special offers
          </h2>
          <div className="card bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="card__title">Get Special Offers</p>
              <p className="card__sub-title mb-3">
                Many offers waiting for you, get it now
              </p>
              <Button className="primary-btn" aria-label="Add your card to unlock special offers">Add a card</Button>
            </div>
            <img
              src="/special-offer-card.png"
              alt="Illustration showing gift card with discount tag"
              className="card__img object-cover rounded-xl"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
