import { useState, useEffect } from "react";

const Footer = ({ sharedBasicInfo }) => {
  const [networks, setNetworks] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (sharedBasicInfo) {
      var networks = sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
      setNetworks(networks);
    };
    const crDate = new Date();
    setCurrentDate(crDate);
  }, [sharedBasicInfo]);

  return (
    <footer>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-holder">
              <div className="social-links">{networks}</div>
              <div className="contact-info">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i className="fab fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;<p>+91 9836412954</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;<p>sudiptaroy.roy4@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              &copy; {" "} {currentDate.getFullYear()} {" "} Copyright <b> | </b>
              {" "}{sharedBasicInfo
                ? sharedBasicInfo.name
                : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
