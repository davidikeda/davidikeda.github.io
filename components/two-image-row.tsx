import Image from "next/image";

interface TwoImageRowProps {
  leftSrc: string;
  rightSrc: string;
  leftAlt?: string;
  rightAlt?: string;
}

export default function TwoImageRow({
  leftSrc,
  rightSrc,
  leftAlt = "",
  rightAlt = "",
}: TwoImageRowProps) {
  return (
    <div className="w-full flex justify-center my-6">
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-2
          w-full
          max-w-[80vw]
          md:max-w-4xl
        "
      >
        <Image
          src={leftSrc}
          alt={leftAlt}
          width={800}
          height={600}
          className="w-full md:w-1/2 h-auto rounded-xl"
        />

        <Image
          src={rightSrc}
          alt={rightAlt}
          width={800}
          height={600}
          className="w-full md:w-1/2 h-auto rounded-xl"
        />
      </div>
    </div>
  );
}