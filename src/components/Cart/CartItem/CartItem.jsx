import "./CartItem.scss";
import img1 from "../../../assets/products/ashirwaad_atta.png";
import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = ({item}) => {
    const {handleRemoveFromCart,handleCartProductQuantity,} = useContext(Context);
    return(
        <div className="cart-products">
            <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={
                        process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url
                    } alt="" />
                </div>
                <div className="product-details">
                    <span className="product-name">{item.attributes.title}</span>
                    <Delete className="del-btn" onClick = {()=>handleRemoveFromCart(item)}/>
                    <div className="counter-button">
                        <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span className="highlight">&#8377;{item.attributes.price} = &#8377;{item.attributes.quantity * item.attributes.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
