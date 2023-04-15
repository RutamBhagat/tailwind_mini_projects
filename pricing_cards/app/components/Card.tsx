import React from "react";

const pricing = [
  {
    name: "BASIC",
    storage: "100GB",
    price: "$1.99/month",
    features: ["100 GB storage", "Option to add members", "Extra member benefits"],
  },
  {
    name: "STANDARD",
    storage: "200GB",
    price: "$3.99/month",
    features: ["200 GB storage", "Option to add members", "Extra member benefits"],
  },
  {
    name: "PREMIUM",
    storage: "2TB",
    price: "$8.99/month",
    features: ["2 TB storage", "Option to add members", "Extra member benefits"],
  },
];

export default function Card() {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {pricing.map((plan) => {
        return (
          <div className="group border-[12px] border-[#334155] hover:border-[#7c3aed] rounded-2xl min-w-[350px]">
            <div className="py-16 px-20 space-y-5 border-b border-[#334155] rounded-t-2xl text-center">
              <h2 className="uppercase text-lg pb-5">{plan.name}</h2>
              <h1 className="uppercase font-serif font-semibold text-5xl">{plan.storage}</h1>
              <p className="pb-3">{plan.price}</p>
              <button className="py-3 px-6 border border-[#7c3aed] group-hover:bg-[#7c3aed] rounded-md">
                Purchase
              </button>
            </div>
            <div className="rounded-b-2xl p-10 space-y-3 text-center">
              {plan.features.map((feature) => {
                return <p className="">✓ {feature}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
