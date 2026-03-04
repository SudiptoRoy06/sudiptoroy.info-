import Typical from "react-typical";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify/icons-logos/nodejs";
import React, { useState, useEffect } from "react";
import nextIcon from "@iconify/icons-logos/nextjs-icon";
import mongoIcon from "@iconify/icons-logos/mongodb-icon";

const Header = ({ sharedData, sharedBasicInfo }) => {

  const [ name, setName ] = useState("");
  const [ titles, setTitles ] = useState([]);
  const [ profilePic, setProfilePic ] = useState();

  useEffect(() => {
    if (sharedData && sharedBasicInfo) {
      const nm = sharedData.name;
      const titles = sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
      const profilepic = "images/" + sharedBasicInfo.image;
  
      setName(nm);
      setTitles(titles);
      setProfilePic(profilepic); 
    }
  },[sharedData, sharedBasicInfo]);

  const HeaderTitleTypeAnimation = React.memo( () => {
    return <Typical className="title-styles" steps={titles} loop={50} />
  }, (props, prevProp) => true);

  return (
    <header id="home" className="main-header" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-8 profile-text">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
        <div className="col-md-4 profile-pic">
          <div className="polaroid">
            <span style={{ cursor: "auto" }}>
              <img
                height="250px"
                src={profilePic}
                alt="Avatar placeholder"
              />
              <Icon
                icon={reactIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon={nextIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon={nodeIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon={mongoIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
            </span>
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
