import "./Footer.css";
import logo2 from "../assets/images/logo2.jpeg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#">
            <h3>OCEAN STUDIO</h3>
          </a>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="footer-logo">
            <img src={logo2} alt="Ocean Studio Logo" className="footer-logo-img" />
          </div>

        </div>
        <div className="footer-section">
          <a href="#">
            <h3>Services</h3>
          </a>
          <ul>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
          </ul>
        </div>
        <div className="footer-section">
          <a href="#">
            <h3>About</h3>
          </a>
          <ul>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
          </ul>
        </div>
        <div className="footer-section">
          <a href="#">
            <h3>Contact Us</h3>
          </a>
          <ul>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
            <li>Lorem Ipsum is simply</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
