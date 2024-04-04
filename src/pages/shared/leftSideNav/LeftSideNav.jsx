import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="font-medium mb-2">All Categoris</h2>
      <div className="space-y-1.5 font-medium">
        {categories.map((categori) => (
          <NavLink
            to={`/categori/${categori.id}`}
            key={categori.id}
            className={({isActive})=> isActive ? 'text-red-500 block' : 'text-green-500 block'}
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
// {({isActive}) => isActive ? 'text-primary': '' }