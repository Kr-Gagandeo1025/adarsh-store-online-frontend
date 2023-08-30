import { Email, LocationOn,  Payments, Phone, QrCodeScanner } from "@mui/icons-material";
import "./Footer.scss";
const Footer = () => {
    return(
       <div className="footer" id="about">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deserunt, facere minima ipsum doloribus expedita assumenda. Aut porro natus atque molestiae accusamus cum tempore consequatur dolore iusto. Maxime, harum molestias.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <LocationOn className="svg-icon"/>
                        <div className="text">
                            Adarsh Store, Bundu, Ranchi, Jharkhand, 724823
                        </div>
                    </div>
                    <div className="c-item">
                        <Phone className="svg-icon"/>
                        <div className="text">
                            +91-1234567890
                        </div>
                    </div>
                    <div className="c-item">
                        <Email className="svg-icon"/>
                        <div className="text">
                            store@store.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Dairy</span>
                    <span className="text">Toiletries</span>
                    <span className="text">Lentils/Dals/Grains</span>
                    <span className="text">Confectionary</span>
                    <span className="text">Oils/Masale</span>
                    <span className="text">Namkeen</span>
                </div>
                <div className="col">
                    <div className="title">Pages & More</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Replace & Returns</span>
                    <span className="text">Have an Issue?</span>
                </div>
            </div>
            <div className="payments">
                <h4>We accept : </h4>
                <Payments/>
                <span>Cash</span>
                <QrCodeScanner/>
                <span>UPI</span>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Developed and Maintained by @kr_gagandeo
                    </div>
                </div>
            </div>
       </div> 
    );
};

export default Footer;
