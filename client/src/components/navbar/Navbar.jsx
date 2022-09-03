import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { React, useState } from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="logo" />

                <Link to="/" className="link">
                    <span>Hompage</span>
                </Link>
                <Link to="/series" className="link">
                    <span>Series</span>
                </Link>
                <Link to="/movies" className="link">
                    <span>Movies</span>
                </Link>
                
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t31.18172-8/12039095_697410763726104_2107892175438127937_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH3FTruLRy1A91oGo6gho9xJ70Gut__eRUnvQa63_95FeD3v3i0eOpUDIWhJ7CAaJ6aS8nQutKlXTfCw1xHDgAh&_nc_ohc=Ul9O_nfFbd4AX_IIA9I&tn=lpdDUx6402RmpbtB&_nc_ht=scontent-los2-1.xx&oh=00_AT_KVipaJTiXayQppqYOlqF7ThCCvr1ABB1oqR0C5ZkBqg&oe=6330FC2F" alt="img" />

                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar