import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import PackageAlex from "./Menu/Packages/PackageAlex";
import PackageCairo from "./Menu/Packages/PackageCairo";
import Package1 from "./Menu/Packages/Package1";
import Package2 from "./Menu/Packages/Package2";
import Package3 from "./Menu/Packages/Package3";
import Package4 from "./Menu/Packages/Package4";


const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alexandria/packages" element={<PackageAlex />} />
        <Route path="/cairo/packages" element={<PackageCairo />} />
        <Route path="/packages/lor" element={<Package1 />} />
        <Route path="/packages/platine" element={<Package2 />} />
        <Route path="/packages/le-diamant" element={<Package3 />} />
        <Route path="/packages/live-stations" element={<Package4 />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;