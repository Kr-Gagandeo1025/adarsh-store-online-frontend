import { Button, IconButton, TextField } from "@mui/material";
import "./Newsletter.scss";
import { Email, Facebook, Instagram, Phone, WhatsApp } from "@mui/icons-material";
const Newsletter = () => {
    return (
        <div className="contact-form">
            <span className="small-letter">CONTACT US</span>
            <div className="contact-form-content">
                <div className="form-area1">
                    <span className="big-text">
                        Write to Us
                    </span>
                    <TextField className="email-input" placeholder="Email Address" variant="outlined"/>
                    <TextField className="text-input" placeholder="Write a Short mail to us..."  variant="outlined"/>
                    <Button className="send-btn" variant="contained">Send <Email/></Button>
                </div>
                <div className="extra-contact-icons">
                    <div>
                    <IconButton>
                        <Instagram className="icon"/>
                    </IconButton>
                    <IconButton>
                        <Facebook className="icon"/>
                    </IconButton>
                    <IconButton>
                        <WhatsApp className="icon"/>
                    </IconButton>
                    </div>
                    <div className="contact-det"><Phone/><span>+9102721092</span></div>
                    <div className="contact-det"><Email/><span>email@email.com</span></div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
