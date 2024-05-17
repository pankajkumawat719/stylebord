import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import mens_kurta from "../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10  flex flex-col justify-center py-20 px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"women's dress"} />
      </div>
    </div>
  );
};
export default HomePage;
