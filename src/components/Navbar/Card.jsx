import React from "react";

export default function Card({ image, title, description, price }) {
  return (
    <div class="w-[20em] rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image} alt={title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{description}</p>
        <div className="flex">
          <div className="mr-4 text-white py-2 px-4 rounded bg-[#393E46] flex justify-center">
            <p className="text-[25px] font-semibold text-red-50">{price}</p>
          </div>
          <button class="bg-[#82CD47] hover:bg-[#557153] text-white font-bold py-2 px-4 rounded">Add</button>
        </div>
      </div>
    </div>
  );
}
