import React from "react";

export default function Navbar() {
  return (
    <nav class="flex items-center  flex-wrap bg-red-300 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-20">
        <span class="font-semibold text-xl tracking-tight">TOKO</span>
      </div>

      <div class="   lg:flex lg:items-center lg:w-auto">
        <div class="text-md">
          <a href="" class=" mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
            HOME
          </a>
          <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
}
