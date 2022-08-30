import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./ListItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv"
  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave = {() => setIsHovered(false)}>
        <img src="https://scontent-los2-1.xx.fbcdn.net/v/t1.18169-9/10254003_454401161360400_1969501202899021399_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFptilP_Ud63du-_YbsN7U0HdncvMdXO6cd2dy8x1c7p9e8Jhcs4FlAQenuKdoi5Q3grj4Lj94LFJDewjDNRXML&_nc_ohc=dm1fRUAXuU4AX8e4iEH&_nc_ht=scontent-los2-1.xx&oh=00_AT9XTKy_4PST3i317YFSOFOw14v0s8jlpf2zastJ0x8m9Q&oe=632FB345" alt="" />

        {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+21</span>
            <span>1999</span>
          </div>
          <div className="dec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </div>
          <div className="genre">Action</div>
          </div>
        </>
        )}
        
    </div>
  )
}
