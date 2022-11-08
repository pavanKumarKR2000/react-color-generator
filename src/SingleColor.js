import { useState, useEffect } from "react";
import rgbToHex from "./utils";
import "./SingleColor.css";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const RGB = rgb.join(",");
  const HEX = rgbToHex(...rgb);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(HEX);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      style={{ backgroundColor: `rgb(${RGB})` }}
      className={`color ${index > 8 && "color-light"}`}
      onClick={handleClick}
    >
      <p className="percentage-value">{weight}%</p>
      <p className="color-value">{HEX}</p>
      {alert && <p className="alert-message">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
