import "./Banner.scss";
import BannerImg from "../../../assets/banner-img1.png"
import { IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
const Banner = () => {
    return(
        <div className="banner-main">
            <div className="content">
                <div className="text-content">
                    <h1>Ration Wale <br/> Bhaiya </h1>
                    <p>©In Partnership Adarsh Store. <br/> 
                    Shop all your needs with your fingertips
                    </p>
                    <div className="ctas">
                        <IconButton >
                            <Instagram className="ctas-icon insta"/>
                        </IconButton>
                        <IconButton >
                            <Facebook className="ctas-icon facebook"/>
                        </IconButton>
                        <IconButton >
                            <WhatsApp className="ctas-icon whatsapp"/>
                        </IconButton>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="hero-banner"/>
            </div>
        </div>
    );
};

export default Banner;
