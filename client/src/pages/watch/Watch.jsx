import { ArrowBackIosOutlined } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay={true}
        progress
        controls
        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv"
      />
    </div>
  );
}
