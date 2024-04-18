import React from "react";
import { useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import {AvailButton, BoxForImage, ButtonBox, OrderBox, CalcButton, GeneralColumn, VehicleDetailBox, GeneralRow, VinDisp, MileageDisp, YearDisp, MakeDisp, ModelDisp, StyleDisp, ColorDisp, TypeDisp, MpgCDisp, MpgHDisp} from "../components/purchaseElements.js";
import Modal from "../components/Modal.js";
import logo from "../logo.svg"
 
const Purchase = () => {
    const apiUrl = env.APIURL;                              // saving the db API url as a const
    const [open, setOpen] = useState(false);                // declaration of the variables passed in Modal
    const [vehicleData, setVehicleData] = useState(null);   // store fetched customer data
    const [loading, setLoading] = useState(true);           // store loading state
    const [error, setError] = useState(null);               // store error message

    const fetchVehicleData = async () => {                  // fetch vehicle data from API
        try {
            // Make API request to fetch customer data using Axios
            const response = await axios.get(`${apiUrl}/getAllVehicles`);
            // Parse the JSON response
            const data = response.data;
            // Set the fetched customer data in the state
            setVehicleData(data);
            // Set loading state to false
            setLoading(false);
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
            // Set error state to display error message
            setError(error.message);
            // Set loading state to false
            setLoading(false);
        }
    };

    const handleClose = () => { // function to close the modal
        setOpen(false);
    };
    const handleOpen = () => {  //function to open the modal
        setOpen(true);
    };

    return (
        <div>
            <h1>Purchase</h1>
            <div>
                <h2>ex</h2>
                <GeneralColumn>
                    <BoxForImage>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg"
                            width = {400} height = {220} alt= "ex"/>
                    </BoxForImage>
                    <VehicleDetailBox>
                        <h3>Vehicle Details:</h3>
                        <GeneralRow>
                            <VinDisp value = {10010101}/>
                            <MileageDisp value = {32131}/>
                        </GeneralRow>
                        <GeneralRow>
                            <YearDisp value = {2022}/>
                            <MakeDisp value = {"Honda"}/>
                            <ModelDisp value = {"Civic"}/>
                        </GeneralRow>
                        <GeneralRow>
                            <StyleDisp value = {"LX Sedan 4D"}/>
                            <ColorDisp value = {"Silver"}/>
                            <TypeDisp value = {"Sedan"}/>
                        </GeneralRow>
                        <GeneralRow>
                            <MpgCDisp value = {30}/>
                            <MpgHDisp value = {37}/>
                        </GeneralRow>
                    </VehicleDetailBox>
                </GeneralColumn>
                <GeneralColumn>
                    <ButtonBox>
                        <CalcButton/>
                        <AvailButton/>
                    </ButtonBox>
                    <OrderBox>
                        <button onClick={handleOpen}
                        style={{
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
                                {/* Modal's children*/}
                                <h2>Purchase Complete</h2>
                                <img src={logo} width = {50} height = {50} alt= "Logo"/>
                                <h3>Details:</h3>
                                <p>Order Total: a bajillion dollars</p>
                                <p>Next Day Shipping</p>
                            </>
                        </Modal>  
                    </OrderBox>
                </GeneralColumn>
            </div>
        </div>
    );
};
 
export default Purchase;