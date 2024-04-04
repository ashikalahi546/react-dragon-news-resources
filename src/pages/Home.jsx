import React from "react";
import Header from "./shared/Header";
import Navber from "./shared/Navber";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import RightSideNav from "./shared/rightSideNav/RightSideNav";
import BreakingNews from "./breakingNews/BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navber></Navber>

      <div className="grid md:grid-cols-4 gap-6 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-center">coming soon.....</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
