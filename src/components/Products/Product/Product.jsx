import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({id,data}) => {
    const Navigate = useNavigate();
    return(
        <div className="product-card" onClick={()=>Navigate("/product/"+id)}>
            <div className="thumb-img">
                <img src={
                    process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
                } alt="" />
            </div>
            <div className="product-details">
                <h4 className="name">{data.title}</h4>
                <div className="price">
                    <span className="weight">
                        {data.weight}g
                    </span>
                    <span className="new-price">
                        &#8377;{data.price}
                    </span>
                </div>
            </div>
        </div>
    );
};
// process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
export default Product;
