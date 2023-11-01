export default function ServicesCard({ img, alt, title, description }) {
  return (
    <div className="col-span-3 space-y-4 pb-20">
      <div className="aspect-square overflow-hidden rounded-md">
        <img src={img} className="h-full w-full object-cover" alt={alt} />
      </div>
      <div className="space-y-2">
        <h3 className="text-bright-brown">{title}</h3>
        <p className="text-brown">{description}</p>
      </div>
    </div>
  );
}
