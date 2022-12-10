import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Dropdown from "./Dropdown";
function Right() {
  return (
    <section className="p-4 space-y-8 pr-8 bg-green-700">
      <div className="flex space-x-2 items-center justify-between bg-orange-500">
        {/* ICONS */}
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
          <HiOutlineShieldCheck className="text=[#ccc] text-xl" />
          <MdOutlineSettings className="text=[#ccc] text-xl" />
          <BiBell className="text=[#ccc] text-xl" />
        </div>
        {/* PROFILE */}
        <Dropdown />
      </div>
    </section>
  );
}

export default Right;
