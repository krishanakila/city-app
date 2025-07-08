interface DetailGalleryProps {
  title: string;
  description: string;
  image: string;
}

export default function DetailGallery({ title, description, image }: DetailGalleryProps) {
  return (
    <div className="relative w-full">
      <img src={image} className="w-full h-72 object-cover" alt={title} />
      <div className="bg-white px-4 py-6 space-y-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl">
          Redeem Offer
        </button>
      </div>
    </div>
  );
}
