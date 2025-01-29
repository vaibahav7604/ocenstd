import { useState } from "react";
import datacenter from "../assets/images/datacenter.jpg";
import dummy from "../assets/images/dummy.png";
import dummy2 from "../assets/images/dummy2.png";
import "./Tablexe.css";
import { motion } from "framer-motion";

function Tablexe() {
  // motion function animation
  const HeadingAnimation = {
    initialProp: { opacity: 0, y: -50 },
    whileInViewProp: { opacity: 1, y: 0 },
    transitionProp: {
      duration: 1,
      delay: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  };

  const images = [dummy, dummy2, dummy, dummy2];
  const [selectedRow, setSelectedRow] = useState(1);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <>
      <motion.h2
        id="Heading-table"
        initial={HeadingAnimation.initialProp}
        whileInView={HeadingAnimation.whileInViewProp}
        transition={HeadingAnimation.transitionProp}
      >
        How Does it Work
      </motion.h2>
      <div className="Tablexe-container">
        <div className="table-container">
          <table>
            <tbody>
              {[1, 2, 3, 4].map((row) => (
                <tr
                  key={row}
                  onClick={() => handleRowClick(row)}
                  className={selectedRow === row ? "selected" : ""}
                >
                  <td>{row}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="image-container">
          {images[selectedRow - 1] && (
            <img
              src={images[selectedRow - 1]}
              alt={`Image for row ${selectedRow}`}
            />
          )}
        </div>
      </div>
      <motion.div
        initial={{ clipPath: "inset(100% 50% 50% 50%)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="showepic"
      >
        <div className="img-text">
          <motion.p
            initial={{ filter: "blur(1px)" }}
            whileHover={{ skewX: 2, skewY: 2, filter: "blur(0)", scale: 1.1 }}
            id="textofimg"
          >
            Some text here dummy dummy..!!
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 1 }}
          whileHover={{ filter: "blur(2px)" }}
          transition={{ duration: 0.3 }}
          src={datacenter}
          alt="some img here"
        />
      </motion.div>
    </>
  );
}

export default Tablexe;
