import Image from "next/image";
import React from "react";
import Cards from "./Cards";
import lightborn from "../assets/lightborn.png";
import puff from "../assets/puff.png";
import yokai from "../assets/yokaki.png";
import astrophilic from "../assets/Astrophilic.png";

var card = [
  { title: "LIGHTBORN AVATARS", image: lightborn },
  { title: "PUFF GENESIS", image: puff },
  { title: "Yokai Kingdom Genesis", image: yokai },
  { title: "Asthophilic", image: astrophilic },
];

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="">
        <p className="font-bold text-[32px] mx-12 text-center">
          Explore, collect, and sell NFTs
        </p>
      </div>

      <div className=" overflow-hidden flex flex-col md:space-x-3 md:flex-row mt-8">
      
        {/* Image Cards Container */}
        {card.map((card) => (
          <Cards key={card.title} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
