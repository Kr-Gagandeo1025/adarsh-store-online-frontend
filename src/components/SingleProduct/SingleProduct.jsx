import "./SingleProduct.scss";
import img1 from "../../assets/products/ashirwaad_atta.png"
import { Facebook, Instagram, ShoppingCart, Twitter, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import RealatedProducts from "./RelatedProducts/RelatedProducts"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const {handleAddToCart} = useContext(Context);
    const increment = () =>{
        // setQuantity(quantity+1);
        setQuantity(prevState=> prevState+1);
    }
    const decrement = () =>{
        if(quantity>1){
            setQuantity(prevState=> prevState-1);
        }
    }
    if(!data) return(<h1>Oops... T-T </h1>);
    const product  = data.data[0].attributes;
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={
                            process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url
                        } alt="" className="product-img" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="price">{product.weight}g</span>
                        <span className="description">{product.desc}</span>
                        <div className="cart-buttons">
                            <div className="counter-button">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-cart-button" onClick={() => {
                                handleAddToCart(data.data[0],quantity);
                                setQuantity(1);
                            }}>
                                <ShoppingCart/>
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-items">
                            <span className="text-bold">Category:{" "}
                                <span className="item-cat">{
                                product.categories.data[0].attributes.title}</span>
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
                <RealatedProducts productId={id} categoryId={product.categories.data[0].id}/>
            </div>
        </div>
    );
};

export default SingleProduct;
