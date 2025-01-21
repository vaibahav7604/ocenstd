import "./Header.css"; 
import homepage from"../assets/images/homepage.png"
export default function Header() {
  return (
    
      <div className='header'>
        <div className="header-content">
            <h2>some dummy texts </h2>
            <p>some Texe</p>
            <button >know More</button>
            
        </div>
        <div className="header-img">
            <img src={homepage} alt="homepage" />
        </div>
    </div>
  )
}
