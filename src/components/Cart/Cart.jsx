import { ArrowBack, Close } from "@mui/icons-material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import "./Cart.scss";
import CartItem from "../Cart/CartItem/CartItem";
const cart = false;
const Cart = ({setShowcart}) => {
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
                {cart && <div className="empty-cart">
                    <ProductionQuantityLimitsIcon className="no-cart-icon"/>
                    <span>No products in the cart</span>
                    <button className="return-btn" onClick={()=>setShowcart(false)}><ArrowBack/>Continue Shopping</button>
                </div>}

                <>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text-total">&#8377; 1234</span>
                        </div>
                        <div className="checkout">
                            <button className="chk-btn">Checkout</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
