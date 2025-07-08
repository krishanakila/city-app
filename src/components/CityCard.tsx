
interface CityCardProps {
name: string;
image: string;
}

export default function CityCard({ name, image }: CityCardProps) {
return (
<div className="a-rounded">
<img src={image} alt={name} className="a-rounded__img shadow-md object-cover" />
<p className="a-rounded__txt text-xs mt-1">{name}</p>
</div>
);
}