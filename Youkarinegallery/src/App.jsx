import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Controls from "./Components/Controls/Controls";
import { useState } from "react";
import { data } from "./data/_metadata";
import { useEffect } from "react";

function App() {
  const [setData, setSetData] = useState(data);
  const [curveLength, setcurveLength] = useState("");
  const [curveWidth, setCurveWidth] = useState("");
  const [swirl, setSwirl] = useState("");
  const [curveDistance, setCurveDistance] = useState("");
  const [logoPlacement, setLogoPlacement] = useState("");
  const [outlines, setOutlines] = useState("");
  const [distortion, setDistortion] = useState("");
  const [colors, setColors] = useState("");
  const [overlapping, setOverlapping] = useState("");
  const [border, setBorder] = useState("");

  const forFilterIng = () => {
    let tempData = [];

    for (let a in data) {
      if (tempData.length > 500) break;

      if (
        data[a].attributes[0].value == curveLength ||
        data[a].attributes[1].value == curveWidth ||
        data[a].attributes[7].value == swirl ||
        data[a].attributes[2].value == curveDistance ||
        data[a].attributes[10].value == logoPlacement ||
        data[a].attributes[3].value == outlines ||
        data[a].attributes[4].value == distortion ||
        data[a].attributes[8].value == colors ||
        data[a].attributes[5].value == overlapping ||
        data[a].attributes[6].value == border
      ) {
        tempData.push(data[a]);
      }
    }

    setSetData(tempData);
  };

  const forClearing = () => {
    setBorder("");
    setcurveLength("");
    setCurveWidth("");
    setSwirl("");
    setCurveDistance("");
    setLogoPlacement("");
    setOutlines("");
    setDistortion("");
    setColors("");
    setOverlapping("");
  };

  useEffect(() => {
    if (
      curveLength != "" ||
      curveWidth != "" ||
      swirl != "" ||
      curveDistance != "" ||
      logoPlacement != "" ||
      outlines != "" ||
      distortion != "" ||
      colors != "" ||
      overlapping != "" ||
      border != ""
    ) {
      forFilterIng();
    } else {
      setSetData(data);
    }
  }, [
    curveLength,
    curveWidth,
    swirl,
    curveDistance,
    logoPlacement,
    outlines,
    distortion,
    colors,
    overlapping,
    border,
  ]);

  return (
    <>
      <Header />
      <div className="main_container">
        <Gallery data={setData} />
        <Controls
          setcurveLength={setcurveLength}
          curveLength={curveLength}
          setCurveWidth={setCurveWidth}
          curveWidth={curveWidth}
          setSwirl={setSwirl}
          swirl={swirl}
          setCurveDistance={setCurveDistance}
          curveDistance={curveLength}
          setLogoPlacement={setLogoPlacement}
          logoPlacement={logoPlacement}
          setOutlines={setOutlines}
          outlines={outlines}
          setDistortion={setDistortion}
          distortion={distortion}
          setColors={setColors}
          colors={colors}
          setOverlapping={setOverlapping}
          overlapping={overlapping}
          setBorder={setBorder}
          border={border}
          forClearing={forClearing}
        />
      </div>
    </>
  );
}

export default App;
