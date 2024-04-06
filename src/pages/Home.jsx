import React from "react";
import Header from "./shared/Header";
import Navber from "./shared/Navber";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import RightSideNav from "./shared/rightSideNav/RightSideNav";
import BreakingNews from "./breakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./newsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news)
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
       {
     news.map(aNews => <NewsCard news ={aNews}></NewsCard>)
       }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
