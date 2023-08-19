import "./CartItem.scss";
import img1 from "../../../assets/products/ashirwaad_atta.png";
import { Delete } from "@mui/icons-material";
const CartItem = () => {
    return(
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={img1} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-name">Ashirwaad Atta</span>
                    <Delete className="del-btn"/>
                    <div className="counter-button">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="highlight">&#8377;150</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
