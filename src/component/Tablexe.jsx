import { useState } from "react";
import datacenter from "../assets/images/datacenter.jpg";
import dummy from "../assets/images/dummy.png";
import dummy2 from "../assets/images/dummy2.png";
import "./Tablexe.css";
function Tablexe() {
  const images = [
    dummy,
    dummy2,
    dummy,
    dummy2,
  ];
  const [selectedRow, setSelectedRow] = useState(1);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    // Logic to change image based on row click will go here
  };

  return (<>
    <h2 id="Heading-table">How Does it Work</h2>
    <div className="Tablexe-container">
        
      <div className="table-container">
        <table>
          <tbody>
            {[1, 2, 3, 4].map((row) => (
              <tr key={row} onClick={() => handleRowClick(row)}>
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
    <div className="showepic">
    <div className="img-text">
        <p id="textofimg">Some text here dummy dummy..!!</p>
      </div>
        <img src={datacenter} alt="some img here"/>
    </div>
    </>
  );
}

export default Tablexe;
