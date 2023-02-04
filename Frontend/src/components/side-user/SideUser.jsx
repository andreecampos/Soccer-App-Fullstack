import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideUser.css";

const SideUser = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/UserProfile");
  }
  return (
    <div className="side-user">
      <div className="user-bild"></div>
      <div className="user-info">
        <h1>Name of the Player</h1>
        <h2>Delantero</h2>
      </div>
      <div className="user-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          consectetur aut optio atque, quo vel assumenda odit unde tempore
          accusamus facere sed consequuntur ea magni ad neque dolores?
          Laboriosam eum officiis dignissimos exercitationem sapiente, doloribus
          animi ipsum saepe totam voluptates!
        </p>
      </div>
      <div>
        <button className="Profile-button" onClick={handleClick}>
          Profile
        </button>
      </div>
    </div>
  );
};

export default SideUser;
