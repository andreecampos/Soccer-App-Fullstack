import React from "react";
import "../App.css";
import Body from "../components/body/Body";
import Players from "../components/players/Players";
import SideUser from "../components/side-user/SideUser";

const HomePage = () => {
  return (
    <div className="framme-2">
      <SideUser />
      <Body />
      <Players />
    </div>
  );
};

export default HomePage;
