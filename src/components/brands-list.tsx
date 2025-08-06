import Image from "next/image";

const BrandList = () => {
  const images = [
    { src: "/Vector.svg", alt: "Nike" },
    { src: "/Vector-1.svg", alt: "Adidas" },
    { src: "/Vector-2.svg", alt: "Puma" },
    { src: "/Vector-3.svg", alt: "New Balance" },
  ];

  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 px-4 py-2">
        {images.map(({ src, alt }, i) => (
          <div
            key={i}
            className="flex h-24 w-24 shrink-0 flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
          >
            <div className="relative h-10 w-10">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <p className="text-center text-xs font-semibold">{alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
