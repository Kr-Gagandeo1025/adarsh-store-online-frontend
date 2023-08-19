import { Close } from "@mui/icons-material";
import "./Search.scss";
import img1 from "../../../assets/products/ashirwaad_atta.png"
const Search = ({setShowsearch}) => {
    return (
        <div className="search">
            <div className="form-field">
                <input 
                    type="text"
                    autoFocus
                    placeholder="Search for products" 
                />
                <Close className="close-btn" onClick={()=>setShowsearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-result">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={img1} alt="" />
                        </div>
                        <div className="product-details">
                            <span className="product-name">Ashirwaad Atta</span>
                            <span className="product-desc">desc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
