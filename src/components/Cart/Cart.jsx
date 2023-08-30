import { ArrowBack, Close } from "@mui/icons-material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import "./Cart.scss";
import CartItem from "../Cart/CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
const Cart = ({setShowcart}) => {
    const {cartItems,cartSubtotal} = useContext(Context);
    return(
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setShowcart(false)}>
                        <Close/>
                    </span>
                </div>
                {!cartItems?.length && <div className="empty-cart">
                    <ProductionQuantityLimitsIcon className="no-cart-icon"/>
                    <span>No products in the cart</span>
                    <button className="return-btn" onClick={()=>setShowcart(false)}><ArrowBack/>Continue Shopping</button>
                </div>}
                    {cartItems.map((item) => (
                        <CartItem item={item}/>
                    ))}

                        {
                            !!cartItems?.length && (
                                <div className="cart-footer">
                                    <div className="subtotal">
                                        <span className="text">Subtotal:</span>
                                        <span className="text-total">&#8377; {cartSubtotal}</span>
                                    </div>
                                    <div className="checkout">
                                        <button className="chk-btn">Checkout</button>
                                    </div>
                                </div>
                            )
                        }
            </div>
        </div>
    );
};

export default Cart;
