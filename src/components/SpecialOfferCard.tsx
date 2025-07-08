import { useState, useEffect  } from "react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  brand: string;
  title: string;
  highlight: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    brand: "SK-II",
    title: "Get Special Offer",
    highlight: "Up to 9% discount",
    image: "/lady-img.png",
  },
  {
    id: 2,
    brand: "Shiseido",
    title: "Exclusive Beauty Deal",
    highlight: "Save 15% today",
    image: "/shiseido.png",
  },
  {
    id: 3,
    brand: "Muji",
    title: "Special Retail Promo",
    highlight: "10% off selected items",
    image: "/muji.png",
  },
];

export default function SpecialOfferCard() {
  const [activeSlide, setActiveSlide] = useState(0);



  useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 2500); // change every 3 seconds

  return () => clearInterval(interval); // cleanup on unmount
}, []);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden rounded-2xl shadow">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 p-4"
            >
              <div>
                <div className="a-rounded-mini mb-1">
                  <span className="a-rounded-mini__item">{slide.brand}</span>
                </div>
                <p className="typo-14-b--nutral">{slide.title}</p>
                <p className="typo-16-b--bold">{slide.highlight}</p>
                <Button className="primary-btn mt-2 text-xs">View More</Button>
              </div>
              <img
                src={slide.image}
                alt={`${slide.brand} offer`}
                className="w-32 h-32 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === activeSlide ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
