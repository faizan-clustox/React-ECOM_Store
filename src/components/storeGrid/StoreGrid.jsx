import React from "react";
import StoreItem from "../storeItem/StoreItem";

const StoreGrid = () => {
  return (
    <>
      <div class="mx-auto p-4 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-white dark:bg-gray-800">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    </>
  );
};

export default StoreGrid;
