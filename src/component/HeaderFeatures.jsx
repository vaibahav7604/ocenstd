
import './HeaderAndUseCases.css';
import support from "../assets/images/suport.png";
import Fast from "../assets/images/Fast & secure.png";
import nodelay from "../assets/images/nodelay.png";
import useCaseSvg from "../assets/images/usecase.svg"

function HeaderAndUseCases() {
  const headerFeatures = [
    { imgSrc: Fast, title: "Fast & Secured" },
    { imgSrc: nodelay, title: "No Delay" },
    { imgSrc: support, title: "24/7 Support" },
  ];



  return (
    <div className="header-and-usecases bg-animation">
      {/* Header Features */}
      <div className="header-features">
        {headerFeatures.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.imgSrc} alt={feature.title} className="feature-img" />
            <p>{feature.title}</p>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="use-cases">
        <h2>Our render farm is great for...</h2>
        <div className="use-cases-grid">
          <div className="cloud-icon">
            <img src={useCaseSvg} alt="Cloud Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAndUseCases;
