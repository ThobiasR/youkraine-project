import React from "react";
import "./Controls.css";

const Controls = ({
  setcurveLength,
  curveLength,
  curveWidth,
  setCurveWidth,
  setSwirl,
  swirl,
  setLogoPlacement,
  logoPlacement,
  setOutlines,
  outlines,
  setDistortion,
  distortion,
  setColors,
  colors,
  setOverlapping,
  overlapping,
  setBorder,
  border,
  forClearing,
}) => {
  return (
    <div className="controls_container">
      <div className="filter">
        <h3 className="filter_attributes">Filter Attributes</h3>
        <div className="attribute">
          Curve Length
          <ul className="attribute_list">
            <li
              className={`attibute_button ${
                curveLength == "Short" && "active"
              }`}
              onClick={() => {
                if (curveLength == "Short") {
                  setcurveLength("");
                } else {
                  setcurveLength("Short");
                }
              }}
            >
              Short
            </li>
            <li
              className={`attibute_button ${curveLength == "Long" && "active"}`}
              onClick={() => {
                if (curveLength == "Long") {
                  setcurveLength("");
                } else {
                  setcurveLength("Long");
                }
              }}
            >
              Long
            </li>
            <li
              className={`attibute_button ${
                curveLength == "Mixed" && "active"
              }`}
              onClick={() => {
                if (curveLength == "Mixed") {
                  setcurveLength("");
                } else {
                  setcurveLength("Mixed");
                }
              }}
            >
              Mixed
            </li>
          </ul>
        </div>
        <div className="attribute">
          Curve Width
          <ul className="attribute_list">
            <li
              className={`attibute_button ${curveWidth == "Mixed" && "active"}`}
              onClick={() => {
                if (curveWidth == "Mixed") {
                  setCurveWidth("");
                } else {
                  setCurveWidth("Mixed");
                }
              }}
            >
              Mixed
            </li>
            <li
              className={`attibute_button ${
                curveWidth == "Very Thin" && "active"
              }`}
              onClick={() => {
                if (curveWidth == "Very Thin") {
                  setCurveWidth("");
                } else {
                  setCurveWidth("Very Thin");
                }
              }}
            >
              Very Thin
            </li>
            <li
              className={`attibute_button ${curveWidth == "Thin" && "active"}`}
              onClick={() => {
                if (curveWidth == "Thin") {
                  setCurveWidth("");
                } else {
                  setCurveWidth("Thin");
                }
              }}
            >
              Thin
            </li>
            <li
              className={`attibute_button ${curveWidth == "Wide" && "active"}`}
              onClick={() => {
                if (curveWidth == "Wide") {
                  setCurveWidth("");
                } else {
                  setCurveWidth("Wide");
                }
              }}
            >
              Wide
            </li>
            <li
              className={`attibute_button ${curveWidth == "Jumbo" && "active"}`}
              onClick={() => {
                if (curveWidth == "Jumbo") {
                  setCurveWidth("");
                } else {
                  setCurveWidth("Jumbo");
                }
              }}
            >
              Jumbo
            </li>
          </ul>
        </div>
        <div className="attribute">
          Swirl
          <ul className="attribute_list">
            <li
              className={`attibute_button ${swirl == "Yes" && "active"}`}
              onClick={() => {
                if (swirl == "Yes") {
                  setSwirl("");
                } else {
                  setSwirl("Yes");
                }
              }}
            >
              Yes
            </li>
            <li
              className={`attibute_button ${swirl == "No" && "active"}`}
              onClick={() => {
                if (swirl == "No") {
                  setSwirl("");
                } else {
                  setSwirl("No");
                }
              }}
            >
              No
            </li>
          </ul>
        </div>
        <div className="attribute">
          Logo Placement
          <ul className="attribute_list">
            <li
              className={`attibute_button ${
                logoPlacement == "Top Left" && "active"
              }`}
              onClick={() => {
                if (logoPlacement == "Top Left") {
                  setLogoPlacement("");
                } else {
                  setLogoPlacement("Top Left");
                }
              }}
            >
              Top Left
            </li>
            <li
              className={`attibute_button ${
                logoPlacement == "Top Right" && "active"
              }`}
              onClick={() => {
                if (logoPlacement == "Top Right") {
                  setLogoPlacement("");
                } else {
                  setLogoPlacement("Top Right");
                }
              }}
            >
              Top Right
            </li>
            <li
              className={`attibute_button ${
                logoPlacement == "Bottom Left" && "active"
              }`}
              onClick={() => {
                if (logoPlacement == "Bottom Left") {
                  setLogoPlacement("");
                } else {
                  setLogoPlacement("Bottom Left");
                }
              }}
            >
              {" "}
              Bottom Left
            </li>
            <li
              className={`attibute_button ${
                logoPlacement == "Bottom Right" && "active"
              }`}
              onClick={() => {
                if (logoPlacement == "Bottom Right") {
                  setLogoPlacement("");
                } else {
                  setLogoPlacement("Bottom Right");
                }
              }}
            >
              Bottom Right
            </li>
            <li
              className={`attibute_button ${
                logoPlacement == "Random" && "active"
              }`}
              onClick={() => {
                if (logoPlacement == "Random") {
                  setLogoPlacement("");
                } else {
                  setLogoPlacement("Random");
                }
              }}
            >
              Random
            </li>
          </ul>
        </div>
        <div className="attribute">
          Outlines
          <ul className="attribute_list">
            <li
              className={`attibute_button ${outlines == "Yes" && "active"}`}
              onClick={() => {
                if (outlines == "Yes") {
                  setOutlines("");
                } else {
                  setOutlines("Yes");
                }
              }}
            >
              Yes
            </li>
            <li
              className={`attibute_button ${outlines == "No" && "active"}`}
              onClick={() => {
                if (outlines == "No") {
                  setOutlines("");
                } else {
                  setOutlines("No");
                }
              }}
            >
              No
            </li>
          </ul>
        </div>
        <div className="attribute">
          Distortion
          <ul className="attribute_list">
            <li
              className={`attibute_button ${distortion == "None" && "active"}`}
              onClick={() => {
                if (distortion == "None") {
                  setDistortion("");
                } else {
                  setDistortion("None");
                }
              }}
            >
              None
            </li>
            <li
              className={`attibute_button ${distortion == "Low" && "active"}`}
              onClick={() => {
                if (distortion == "Low") {
                  setDistortion("");
                } else {
                  setDistortion("Low");
                }
              }}
            >
              Low
            </li>
            <li
              className={`attibute_button ${
                distortion == "Meidum" && "active"
              }`}
              onClick={() => {
                if (distortion == "Meidum") {
                  setDistortion("");
                } else {
                  setDistortion("Meidum");
                }
              }}
            >
              Meidum
            </li>
            <li
              className={`attibute_button ${distortion == "High" && "active"}`}
              onClick={() => {
                if (distortion == "High") {
                  setDistortion("");
                } else {
                  setDistortion("High");
                }
              }}
            >
              High
            </li>
          </ul>
        </div>
        <div className="attribute">
          Overlapping
          <ul className="attribute_list">
            <li
              className={`attibute_button ${overlapping == "None" && "active"}`}
              onClick={() => {
                if (overlapping == "None") {
                  setOverlapping("");
                } else {
                  setOverlapping("None");
                }
              }}
            >
              None
            </li>
            <li
              className={`attibute_button ${overlapping == "Low" && "active"}`}
              onClick={() => {
                if (overlapping == "Low") {
                  setOverlapping("");
                } else {
                  setOverlapping("Low");
                }
              }}
            >
              Low
            </li>
            <li
              className={`attibute_button ${
                overlapping == "Meidum" && "active"
              }`}
              onClick={() => {
                if (overlapping == "Meidum") {
                  setOverlapping("");
                } else {
                  setOverlapping("Meidum");
                }
              }}
            >
              Meidum
            </li>
            <li
              className={`attibute_button ${overlapping == "High" && "active"}`}
              onClick={() => {
                if (overlapping == "High") {
                  setOverlapping("");
                } else {
                  setOverlapping("High");
                }
              }}
            >
              High
            </li>
          </ul>
        </div>
        <div className="attribute">
          Colours
          <ul className="attribute_list">
            <li
              className={`attibute_button ${
                colors == "Slava-Ukraine" && "active"
              }`}
              onClick={() => {
                if (colors == "Slava-Ukraine") {
                  setColors("");
                } else {
                  setColors("Slava-Ukraine");
                }
              }}
            >
              Slava-Ukraine
            </li>
            <li
              className={`attibute_button ${colors == "Fire" && "active"}`}
              onClick={() => {
                if (colors == "Fire") {
                  setColors("");
                } else {
                  setColors("Fire");
                }
              }}
            >
              Fire
            </li>
            <li
              className={`attibute_button ${colors == "War" && "active"}`}
              onClick={() => {
                if (colors == "War") {
                  setColors("");
                } else {
                  setColors("War");
                }
              }}
            >
              War
            </li>
            <li
              className={`attibute_button ${colors == "Sunrise" && "active"}`}
              onClick={() => {
                if (colors == "Sunrise") {
                  setColors("");
                } else {
                  setColors("Sunrise");
                }
              }}
            >
              Sunrise
            </li>
            <li
              className={`attibute_button ${colors == "Chaos" && "active"}`}
              onClick={() => {
                if (colors == "Chaos") {
                  setColors("");
                } else {
                  setColors("Chaos");
                }
              }}
            >
              Chaos
            </li>
            <li
              className={`attibute_button ${colors == "Military" && "active"}`}
              onClick={() => {
                if (colors == "Military") {
                  setColors("");
                } else {
                  setColors("Military");
                }
              }}
            >
              Military
            </li>
            <li
              className={`attibute_button ${colors == "Dark-Days" && "active"}`}
              onClick={() => {
                if (colors == "Dark-Days") {
                  setColors("");
                } else {
                  setColors("Dark-Days");
                }
              }}
            >
              Dark-Days
            </li>

            <li
              className={`attibute_button ${colors == "Hope" && "active"}`}
              onClick={() => {
                if (colors == "Hope") {
                  setColors("");
                } else {
                  setColors("Hope");
                }
              }}
            >
              Hope
            </li>
            <li
              className={`attibute_button ${colors == "Peace" && "active"}`}
              onClick={() => {
                if (colors == "Peace") {
                  setColors("");
                } else {
                  setColors("Peace");
                }
              }}
            >
              Peace
            </li>
            <li
              className={`attibute_button ${
                colors == "Wheat-Fields" && "active"
              }`}
              onClick={() => {
                if (colors == "Wheat-Fields") {
                  setColors("");
                } else {
                  setColors("Wheat-Fields");
                }
              }}
            >
              Wheat-Fields{" "}
            </li>

            <li
              className={`attibute_button ${colors == "Coal" && "active"}`}
              onClick={() => {
                if (colors == "Coal") {
                  setColors("");
                } else {
                  setColors("Coal");
                }
              }}
            >
              Coal
            </li>
            <li
              className={`attibute_button ${
                colors == "Dusty-Skies" && "active"
              }`}
              onClick={() => {
                if (colors == "Dusty-Skies") {
                  setColors("");
                } else {
                  setColors("Dusty-Skies");
                }
              }}
            >
              Dusty-Skies
            </li>
          </ul>
        </div>
        <div className="attribute">
          Border
          <ul className="attribute_list">
            <li
              className={`attibute_button ${border == "Yes" && "active"}`}
              onClick={() => {
                if (border == "Yes") {
                  setBorder("");
                } else {
                  setBorder("Yes");
                }
              }}
            >
              Yes
            </li>
            <li
              className={`attibute_button ${border == "No" && "active"}`}
              onClick={() => {
                if (border == "No") {
                  setBorder("");
                } else {
                  setBorder("No");
                }
              }}
            >
              No
            </li>
          </ul>
        </div>
        <div className="attribute">
          <div className="attibute_button short" onClick={forClearing}>
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
