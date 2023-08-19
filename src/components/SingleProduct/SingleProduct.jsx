import "./SingleProduct.scss";
import img1 from "../../assets/products/ashirwaad_atta.png"
import { Facebook, Instagram, ShoppingCart, Twitter, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import RealatedProducts from "./RelatedProducts/RelatedProducts"
const SingleProduct = () => {
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={img1} alt="" className="product-img" />
                    </div>
                    <div className="right">
                        <span className="name">name</span>
                        <span className="price">price</span>
                        <span className="description">desc</span>
                        <div className="cart-buttons">
                            <div className="counter-button">
                                <span>-</span>
                                <span>0</span>
                                <span>+</span>
                            </div>
                            <button className="add-cart-button">
                                <ShoppingCart/>
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-items">
                            <span className="text-bold">Category:
                                <span className="item-cat">Food Grains</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <IconButton>
                                        <WhatsApp/>
                                    </IconButton>
                                    <IconButton>
                                        <Facebook/>
                                    </IconButton>
                                    <IconButton>
                                        <Instagram/>
                                    </IconButton>
                                    <IconButton>
                                        <Twitter/>
                                    </IconButton>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RealatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
