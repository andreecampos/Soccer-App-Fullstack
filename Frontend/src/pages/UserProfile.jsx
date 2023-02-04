import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/UserProfile/Userprofile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/HomePage");
  }

  return (
    <div className="framme-2">
      <div className="signup-container">
        <div className="right-container"></div>

        <div className="left-container">
          <div className="headers-user-profile">
            <div className="user-bild"></div>
            <div className="team-logo"></div>
          </div>

          <div className="set-1">
            <div className="pets-name">
              <label htmlfor="pets-name">Name</label>
              <input
                id="pets-name"
                placeholder="write your name"
                type="text"
              ></input>
            </div>
            <div className="pets-photo">
              <button id="pets-upload">
                <i className="fas fa-camera-retro"></i>
              </button>
              <label htmlfor="pets-upload">Upload a photo</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label htmlfor="pets-breed">Last Name</label>
              <input
                id="pets-breed"
                placeholder="write your last name"
                type="text"
              ></input>
            </div>
            <div className="pets-birthday">
              <label for="pets-birthday">Birthday</label>
              <input
                id="pets-birthday"
                placeholder="MM/DD/YYYY"
                type="text"
              ></input>
            </div>
            <div className="set-3">
              <div className="pets-gender">
                <label for="pet-gender-female">Gender</label>
                <div className="radio-container">
                  <input
                    id="pet-gender-female"
                    name="pet-gender"
                    type="radio"
                    value="female"
                  ></input>
                  <label for="pet-gender-female">Female</label>
                  <input
                    id="pet-gender-male"
                    name="pet-gender"
                    type="radio"
                    value="male"
                  ></input>
                  <label for="pet-gender-male">Male</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="Home-button" onClick={handleClick}>
          Home
        </button>
        <button className="Home-button">Edite Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
