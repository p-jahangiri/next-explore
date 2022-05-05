import React from "react";
import Navbar from "./navbar";
import SearchBar from "./searchBar";
import FilterBar from "./filterBar";

import Slider from "./slider";

export default function Header() {
  return (
    <div >
      <Navbar />
      <SearchBar />
      <Slider />
      <FilterBar />
    </div>
  );
}
