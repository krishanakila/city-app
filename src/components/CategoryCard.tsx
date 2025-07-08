import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  id: string;
  title: string;
  tag: string;
  image?: string;
  btn: string;
}

export default function CategoryCard({ id, title, tag, image, btn }: CategoryCardProps) {
  return (
    <Link
      to={`/offer/${id}`}
      aria-label={`View details for ${title}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={image || "/category.jpg"}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="py-2">
        <h4 className="typo-8-b">{title}</h4>
        <div className="flex items-center justify-start">
            <Button aria-label="Category name button"  type="button" className="primary-btn primary-btn--mini typo-8-b mt-2 mr-1 disabled">{btn}</Button>
            <Button aria-label="Exclusive offer button"  type="button" className="primary-btn primary-btn--mini typo-8-b mt-2">Exclusive</Button>
        </div>
      </div>
    </Link>
  );
}
