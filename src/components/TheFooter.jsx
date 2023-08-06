import "../styles/the-footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
const TheFooter = () => {

  return (
    <footer className="the-footer">

      <img className="footer-logo" src={require("../assets/logo-white.png")} alt="logo" />
      <div className="footer-sitemap">
        <h3>SITE MAP</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>CONTACT US</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            123 Dan Road, Melbourne, Aus
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faPhone} />
            (64) 012-456-789
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            customer@support.com
          </li>
        </ul>
      </div>
      <div className="footer-connect">
        <h3>CONNECT WITH US</h3>
        <i class="fa-brands fa-facebook"></i>
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faYoutube} />
      </div>
    </footer>
  )
}

export default TheFooter;