import "./Header.css"; 
import homepage from"../assets/images/homepage.png";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Header() {
  return (
    
      <div className='header'>
        <div className="header-content">
            <h2>some dummy texts </h2>
            <p>some Texe</p>
            <button >know More</button>
            
        </div>
        <div
         className="header-img">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.8 }
              }}
              viewport={{ infinity:true , margin: "0px 0px -100px 0px" }}
              style={{
                y: useTransform(useScroll().scrollY, [0, 300], [0, 100]),
                rotate: useTransform(useScroll().scrollY, [0, 300], [0, 3])
              }}
              whileHover={{ scale: 1.1}} src={homepage} alt="homepage" />
        </div>
    </div>
  )
}
