import "./Header.scss";
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import {Context} from "../../utils/context"
import { SearchRounded, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
    const [stickey,setStickey] = useState(false);
    const [showcart,setShowcart] = useState(false);
    const [showsearch,setShowsearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const handlescroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setStickey(true);
        }else{
            setStickey(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
    },[]);
    return(
        <>
            <div className={`main-header ${stickey?'stickey-header':''}`}>
                <div className="header-content">
                    <ul className="header-left">
                        <li onClick={()=>navigate("/")}>Home</li>
                        <AnchorLink href="#about" className="link"><li>About</li></AnchorLink>
                        {/* <AnchorLink href="#category" className="link"><li>Categories</li></AnchorLink> */}
                        <AnchorLink href="#contact-us" className="link"><li>Contact Us</li></AnchorLink>
                    </ul>
                    <div className="header-logo-center" onClick={()=>navigate("/")}>Ration Wale Bhaiya.</div>
                    <div className="header-right-icons">
                        <SearchRounded onClick={()=>{setShowsearch(true)}}/>
                        <FavoriteBorder/>
                        <span className="cart-icon" onClick={()=>{setShowcart(true)}}>
                            <ShoppingBag/>
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </div>
            {showcart && <Cart setShowcart={setShowcart}/>}
            {showsearch && <Search setShowsearch={setShowsearch}/>}
        </>
    );
};

export default Header;
