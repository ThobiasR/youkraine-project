import React from "react";
import "./Gallery.css";

const Gallery = ({ data }) => {
  return (
    <div className="gallery_container">
      {data.slice(0, 400).map((s, i) => (
        <div className="image_container" key={i}>
          <img src={s.image} alt="nft" className="nft_iamge" />
          <div className="deatils">
            <h3 className="number">{s.edition}</h3>
            <div className="properties">
              <ul className="properties_list">
                <li>{s.attributes[0].value}</li>
                <li>{s.attributes[1].value}</li>
                <li>{s.attributes[2].value}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
