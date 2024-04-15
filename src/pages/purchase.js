import React from "react";
import {AvailButton, BoxForImage, ButtonBox, OrderBox, CalcButton} from "../components/purchaseElements.js";
import Modal from "../components/Modal.js";
import logo from "../logo.svg"
 
const Purchase = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <h1>Purchase</h1>
            <h2>ex</h2>
            <BoxForImage>
                <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg"
                    width = {400} height = {220} alt= "ex"/>
            </BoxForImage>
            <p>Vehicle Details</p>
            <ButtonBox>
                <CalcButton/>
                <AvailButton/>
            </ButtonBox>
            <OrderBox>
                <button onClick={handleOpen}
                style={{
                    height: 35,
                    width: 1000,
                    alignSelf: "flex-end",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    position: 'relative',
                }}
                >
                Order Now</button>
                <Modal isOpen={open} onClose={handleClose}>
                    <>
                        <h2>Purchase Complete</h2>
                        <img src={logo} width = {50} height = {50} alt= "Logo"/>
                        <h3>Details:</h3>
                        <p>Order Total: a bajillion dollars</p>
                        <p>Next Day Shipping</p>
                    </>
                </Modal>  
            </OrderBox>
        </div>
    );
};
 
export default Purchase;