import "./Header.scss";
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import {Context} from "../../utils/context"
import { SearchRounded, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {
    const [stickey,setStickey] = useState(false);
    const [showcart,setShowcart] = useState(false);
    const [showsearch,setShowsearch] = useState(false);
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className="header-logo-center">Ration Wale Bhaiya.</div>
                    <div className="header-right-icons">
                        <SearchRounded onClick={()=>{setShowsearch(true)}}/>
                        <FavoriteBorder/>
                        <span className="cart-icon" onClick={()=>{setShowcart(true)}}>
                            <ShoppingBag/>
                            <span>69</span>
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
