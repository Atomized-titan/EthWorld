import Image from "next/image";
import React from "react";

const KnowMore = () => {
  return (
    <div className=" bg-[#AA6DF9] h-96 z-40 relative grid grid-cols-3 font-DmSans">
      <div className="col-span-2  py-20 px-36 ">
        <h1 className="text-6xl font-semibold text-white whitespace-nowrap">
          Safe. Secure. Transparent.
        </h1>
        <p className="text-white text-xl mt-8">
          EthWorld is a decentralized network that enables users to interact
          with each other and the blockchain.
        </p>
        <button
          type="button"
          className="rounded-xl bg-white text-[#AA6DF9] py-4 px-8 text-xl mt-8"
        >
          Know more
        </button>
      </div>
      <div className="relative bottom-10 right-10">
        <Image src="/3dMockup.svg" alt="card mockup" layout="fill" />
      </div>
    </div>
  );
};

export default KnowMore;
