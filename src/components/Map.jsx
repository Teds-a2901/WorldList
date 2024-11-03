/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParam, setSearchParams] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div
      className={style.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>MAP</h1>
      <h1>
        Position{lat} {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      ></button>
    </div>
  );
}

export default Map;
