import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./Featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="romance">Romance</option>
                </select>
            </div>
        )}
        <img src="https://scontent-los2-1.xx.fbcdn.net/v/t31.18172-8/12039095_697410763726104_2107892175438127937_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH3FTruLRy1A91oGo6gho9xJ70Gut__eRUnvQa63_95FeD3v3i0eOpUDIWhJ7CAaJ6aS8nQutKlXTfCw1xHDgAh&_nc_ohc=Ul9O_nfFbd4AX_IIA9I&tn=lpdDUx6402RmpbtB&_nc_ht=scontent-los2-1.xx&oh=00_AT_KVipaJTiXayQppqYOlqF7ThCCvr1ABB1oqR0C5ZkBqg&oe=6330FC2F" alt="" />
        <div className="info">
            <img src="https://www.pngfind.com/pngs/m/293-2937866_baby-quotes-png-gods-grace-in-a-tiny.png" alt="title" />
            <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae ipsam distinctio cum corrupti obcaecati natus non porro molestias tempora vel vero sunt error?</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
