import Image from "next/image";
import { useState } from "react";

interface LanguageCardProps {
  image: string;
  name: string;
  body:string
}

export default function LanguageCard({ image, name,body }: LanguageCardProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
          className="flex items-center justify-center transition duration-300 ease-in-out hover:opacity-40 duration-400 rounded-2xl w-36 h-36 bg-primary hover:rotate-90 hover:scale-75"
        >
          <Image
            className={showDescription ? "rotate-[270deg]" : ""}
            src={image}
            alt={name}
            height={100}
            width={100}
          />
        </div>
        <div className="h-4">
          {showDescription && <p className="text-primary">{name}</p>}
        </div>
      </div>
    </>
  );
}
