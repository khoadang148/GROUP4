import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Earning() {
  return (
    <div className="mt-[200px]">
      <div className="flex mb-5 gap-4">
        <FontAwesomeIcon icon={faDollarSign} className="size-6" />
        <h1 className="text-[20px]">Earning</h1>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-[#333333] w-[400px] h-[200px] text-white font-medium">
            <div>
                <p>Sales earnings this month (April), after edututs+ fees, & before taxes:</p>
            </div>
        </div>
        <div className="col-span-1  bg-[#333333]  text-white font-medium">Your balance:</div>
        <div className="col-span-1 bg-[#333333]  text-white font-medium">Total value of your sales, before taxes:</div>
      </div>
    </div>
  );
}

export default Earning;
