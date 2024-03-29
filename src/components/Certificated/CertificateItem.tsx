import Image from "next/image";

import Tilt from "@/components/Tilt";

export default function CertificateItem({ certificate }) {
  return (
    <div
      className="relative flex flex-col px-5 pt-10 pb-5 mb-8 text-center rounded-md shadow-2xl shadow-secondary-alpha bg-secondary-alpha lg:mb-0 w-80 text-primary"
      id="projects"
    >
      <div className="absolute flex items-center self-center text-center -top-32">
        <Tilt>
          <Image
            alt={certificate.image.alt}
            src={certificate.image.filename}
            width={120}
            height={120}
          />
        </Tilt>
      </div>
      <div>
        <p className="text-lg font-bold font-quicksand">{certificate.title}</p>
        <p className="mt-4 text-center">{certificate.description}</p>
      </div>
    </div>
  );
}
