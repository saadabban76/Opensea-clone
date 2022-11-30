import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const cards = [
    {
      title: "Bored Ape Yacht Club",
      floor: "60 ETH",
      value: "663ETH",
      image: c1,
    },
    {
      title: "Otherdeed for Otherside",
      floor: "0.94 ETH",
      value: "560ETH",
      image: c2,
    },
    { title: "CryptoPunks", floor: "0.94 ETH", value: "335ETH", image: c3 },
    {
      title: "Mutant Ape Yacht Club",
      floor: "6 ETH",
      value: "43ETH",
      image: c4,
    },
    {
      title: "Bankrupt FTX Yacht Club",
      floor: "11.98 ETH",
      value: "170ETH",
      image: c5,
    },
    {
      title: "ENS: Etherium",
      floor: "98 ETH",
      value: "0.1ETH",
      image: c6,
    },
    {
      title: "KPR",
      floor: "0.98 ETH",
      value: "10ETH",
      image: c7,
    },
    {
      title: "NounishCNP",
      floor: "1.12 ETH",
      value: "520ETH",
      image: c8,
    },
    {
      title: "Clone X - X",
      floor: "9 ETH",
      value: "17ETH",
      image: c9,
    },
    {
      title: "Bankrupt FTX Yacht Club",
      floor: "11.98 ETH",
      value: "170ETH",
      image: c10,
    },
  ];

  return (
    <div className="my-8 z-0 md:mx-7 mx-0">
      <div className="md:flex hidden my-7 space-x-5 justify-between text-gray-700">
        <div className="flex justify-between w-full">
            <div>COLLECTION</div>
            <div>VOLUME</div>
        </div>
        <div className="flex justify-between w-full">
            <div>COLLECTION</div>
            <div>VOLUME</div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2">
        {cards.map((card, i) => (
          <CollectionCard
            key={i}
            index={i + 1}
            title={card.title}
            image={card.image}
            floor={card.floor}
            volume={card.value}
          />
        ))}
      </div>

      <div className="block md:hidden">
        <div className="flex my-7 justify-between text-gray-700">
          <div>COLLECTION</div>
          <div>VOLUME</div>
        </div>

        {cards.map((card, i) => (
          <CollectionCard
            key={i}
            index={i + 1}
            title={card.title}
            image={card.image}
            floor={card.floor}
            volume={card.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
