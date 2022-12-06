import React from "react";

function Poster({ track }) {
  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px]  overflow-hidden relative text-white/80
     cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out
     group mx-auto"
    >
      <img
        src={track.albumUrl}
        alt=""
        className="h-full w-full absolute rounded-[50px] inset-0 object-cover opacity-80 group-hover:opacity-100"
      />
    </div>
  );
}

export default Poster;
