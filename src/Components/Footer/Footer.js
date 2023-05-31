import React from "react";

const Footer = () => {
  return (
    <>
      <div className="z-20 pt-7 pb-9 lg:py-12 bg-black/90 text-center text-xs md:text-sm mb-10 sm:mb-10 md:mb-0">
        <p className="text-white/80 mb-3 md:mb-1.5">
          Designed and developed by:{" "}
          <span className="font-semibold">Marwyn Sumargo</span>
        </p>
        <div className=" gap-2 text-white/50 flex justify-center text-xs md:text-sm">
          <p>@PokeAPI</p>
          <p className="mx-1.5">@ReactJS</p>
          <p>@Tailwind</p>
          <p className="ml-1">@GSAP</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
