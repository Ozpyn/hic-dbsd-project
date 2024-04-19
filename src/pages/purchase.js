import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import env from "react-dotenv";
import axios from "axios";
import { AvailButton, BoxForImage, ButtonBox, CalcButton, GeneralColumn, VehicleDetailBox, GeneralRow, VinDisp, MileageDisp, YearDisp, MakeDisp, ModelDisp, StyleDisp, ColorDisp, TypeDisp, 
    MpgCDisp, MpgHDisp, PriceBox, MSRPDisp, VehLocBox, AddPayMthdButton, OrderFormS, CondDisp, CurrentPriceBox} from "../components/purchaseElements.js";
import Modal from "../components/Modal.js";
import logo from "../logo.svg"
 
const Purchase = () => {
    const apiUrl = env.APIURL;                              // saving the db API url as a const
    const [open, setOpen] = useState(false);                // declaration of the variables passed in Modal
    const [openErrPay, setOpenErrPay] = useState(false);                // declaration of the variables passed in Error Modal
    const [openErrFrm, setOpenErrFrm] = useState(false);                // declaration of the variables passed in Error Modal
    const [payErrTxt, setPayErrTxt] = useState("");                // declaration of the variables passed in Error Modal
    const [frmErrTxt, setFrmErrTxt] = useState("");                // declaration of the variables passed in Error Modal
    const [vehicleData, setVehicleData] = useState(null);   // store fetched customer data
    const [loading, setLoading] = useState(true);           // store loading state
    const [error, setError] = useState(null);               // store error message
    
    const [modalTitle, changeModText] = useState("Ready to Order?");   // declaration of the variables passed in Modal
    const [orderTot, changeTotalText] = useState("You Will Owe");
    function changeModTitle() {                                        //function to change the modal title
        changeModText("Purchase Complete");
    };
    function setOrderTotal() {                                         //function to change order total text in modal
        changeTotalText("Order Total");
    };

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

    const palceholderVal = 19780;
    const tradVal = Cookies.get('trade-in-value');
    const orderPrice = palceholderVal - tradVal;
    // Cookies.set('vehicle-value', palceholderVal, {expires: 10});

    const [sName, setStName] = useState("");
    const [sNum, setStNum] = useState("");
    const [aptNum, setApt] = useState("");
    const [cityVal, setCity] = useState("");
    const [stateVal, setState] = useState("");
    const [zipVal, setZip] = useState("");
    const [result, setResult] = useState(""); 

    const [buttonText, changeText] = useState("Connect Virtual Payment Method");
    const [boolPayFlag, changePayFlag] = useState(false);

    const handlePayFlag = () => {
        changeText("Virtual Payment Connected");
        changePayFlag(true);
    }

    const handleClose = () => {             // function to close the modal
        setOpen(false);
        setOpenErrPay(false);
        setOpenErrFrm(false);
    };
    const handleOpen = (inpFlag) => {   // function to open the modal
        if (inpFlag === true) {
            setOpen(true);
        } else if (inpFlag === false){
            setOpenErrPay(true);
            setPayErrTxt("Add Payment Method")
        } // add  another for form not filled out and both
            

    };
    const ConfirmOrder = () => {  // 
        changeModTitle();
        setOrderTotal();

    };


    function handleSubmit(e) { 
        e.preventDefault();
        setResult( 
            // will be used for INSERT current order to db
            "Form has been submitted with with Input: " 
                + sNum + " " + sName + " " + aptNum + " " + cityVal + " " + stateVal + " " + zipVal
        );
    } 
    function handleStName(e) { 
        setStName(e.target.value); 
    }
    function handleStNum(e) { 
        setStNum(e.target.value); 
    }
    function handleApt(e) { 
        setApt(e.target.value); 
    }
    function handleCity(e) { 
        setCity(e.target.value); 
    }
    function handleState(e) { 
        setState(e.target.value); 
    }
    function handleZip(e) { 
        setZip(e.target.value);  
    }

    return (
        <div>
            <h1>Purchase</h1>
            <h2 style = {{marginLeft: 10}}>Vehicle Name</h2>
            <div>
                <GeneralRow>
                    <GeneralColumn>
                        <BoxForImage>
                            <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg"
                                width = {400} height = {220} alt= "Vehicle"/>
                        </BoxForImage>
                        <VehicleDetailBox>
                            <h3>Vehicle Details:</h3>
                            <GeneralRow>
                                <CondDisp value = {"Used"}/>
                            </GeneralRow>
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
                        </VehicleDetailBox>
                    </GeneralColumn>
                    <GeneralColumn>
                        <PriceBox>
                            <h3>Price Details:</h3>
                            <GeneralColumn>
                                <MSRPDisp value = {palceholderVal}/>
                                <MpgCDisp value = {30}/>
                                <MpgHDisp value = {37}/>
                            </GeneralColumn>
                        </PriceBox>
                        <VehLocBox>
                            <h3>Vehicle Location:</h3>
                            <dt>Online Dealership</dt>
                            <dt>111 Summit St.</dt>
                            <dt>Kent, Ohio 44240</dt>
                            <dt>(111)111-1111</dt>
                        </VehLocBox>
                    </GeneralColumn>
                    <GeneralColumn>
                        <CurrentPriceBox>
                            <h3>Current Price:</h3>
                            <dt>Vehicle Price: ${palceholderVal}</dt>
                            <dt>Trade-In Discount: ${tradVal}</dt>
                            <dd><strong>Your Current Price:</strong> ${orderPrice}</dd>
                        </CurrentPriceBox>
                        <ButtonBox>
                            <GeneralRow>
                                <CalcButton/>
                                <AvailButton/>
                            </GeneralRow>
                        </ButtonBox>
                    </GeneralColumn>
                    <GeneralColumn>
                        <OrderFormS>
                            <GeneralColumn>
                            <h3>Order Information</h3>
                            <GeneralColumn>
                                <form onSubmit={handleSubmit}>
                                    <dt for = 'streetN'>Street Name: </dt>
                                    <dd><input id = 'streetN' placeholder = "Street" value={sName} onInput={handleStName} required/></dd>
                                    <dt for = 'StreetNum'>Street Number: </dt>
                                    <dd><input id = 'StreetNum' placeholder = "Street Number" value={sNum} onInput={handleStNum} required/></dd>
                                    <dt for = 'Apt'>Apt Number: </dt>
                                    <dd><input id = 'Apt' placeholder = "Apt Number" value={aptNum} onInput={handleApt}/></dd>
                                    <dt for = 'city'>City: </dt>
                                    <dd><input id = 'city' placeholder = "City Name" value={cityVal} onInput={handleCity} required/></dd>
                                    <dt for = 'state'>State: </dt>
                                    <dd><input id = 'state' placeholder = "State" value={stateVal} onInput={handleState} required/></dd>
                                    <dt for = 'zip'>Zip Code: </dt>
                                    <dd><input id = 'zip' style={{marginBottom: "1%"}} placeholder = "Postal/Zip Code" value={zipVal} onInput={handleZip} required/></dd>
                                    <button type="submit">submit</button>
                                </form>
                            </GeneralColumn>
                            <GeneralRow>
                                <AddPayMthdButton flagFunc={handlePayFlag} buttonT={buttonText}/>
                            </GeneralRow>
                            <GeneralRow>
                                <button onClick={() => handleOpen(boolPayFlag)}
                                style={{
                                    position: "relative",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    margin: "auto",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    alignSelf: "end"
                                }}
                                >
                                Order Now</button>
                                <Modal isOpen={open}>
                                    <>
                                        <h2>{modalTitle}</h2>
                                        <img src={logo} width = {50} height = {50} alt= "Logo"/>
                                        <h3>Details:</h3>
                                        <p>{orderTot}: ${orderPrice}</p>
                                        <p>Next Day Shipping</p>
                                        <button onClick={ConfirmOrder}>Confirm Purchase</button>
                                        <button onClick={handleClose}>Close order</button>
                                    </>
                                </Modal>
                                <Modal isOpen={openErrPay || openErrFrm}>
                                    <>
                                        <p>Error: {payErrTxt} {frmErrTxt}</p>
                                        <button onClick={handleClose}>Close</button>
                                    </>
                                </Modal>
                            </GeneralRow>
                            </GeneralColumn>
                        </OrderFormS>
                        {/*
                        <VehicleDetailBox>
                            <p>{result}</p>
                        </VehicleDetailBox>
                        */}
                    </GeneralColumn>
                </GeneralRow>
            </div>
        </div>
    );
};
 
export default Purchase;