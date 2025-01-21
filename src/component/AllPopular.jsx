// import img1 from '../images/';
import OIP from '../assets/images/OIP.jpg';
import "./AllPopular.css";
function AllPopular() {
    const imgs=[OIP,OIP,OIP,OIP,OIP,OIP,OIP,OIP,OIP,OIP];
  return (
    <div className="AllPopular-container">
        <div className='HeaderAllpopular'>
            <p>We support all popular 3D Rendering Software</p>
        </div>
        <div className="img-container">
            {imgs.map((img, index) => (
                <img src={img} key={index} alt="loading"></img>
            ))}
        </div>
    </div>
  )
}

export default AllPopular