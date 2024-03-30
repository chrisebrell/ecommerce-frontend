import { useState } from "react";
import Image from "next/image";

export default function Images({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <div className="flex justify-center">
        <img
          className="max-w-full max-h-[250px] object-contain"
          src={activeImage}
          alt=""
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex gap-3">
          {images.map((image) => (
            <div
              key={image}
              className={`border-2 h-[60px] p-[2px] cursor-pointer rounded-sm ${
                image === activeImage ? "border-ccc" : "border-transparent"
              }`}
              onClick={() => setActiveImage(image)}
            >
              <img className="max-w-full max-h-full" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
