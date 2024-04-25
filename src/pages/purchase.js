import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import env from "react-dotenv";
import axios from "axios";
import { AvailButton, BoxForImage, ButtonBox, CalcButton, GeneralColumn, VehicleDetailBox, GeneralRow, VinDisp, MileageDisp, YearDisp, MakeDisp, ModelDisp, ColorDisp, TypeDisp, 
    MpgCDisp, MpgHDisp, PriceBox, MSRPDisp, VehLocBox, AddPayMthdButton, OrderFormS, CondDisp, CurrentPriceBox, OrderNowButton,
    OrderConfirmButton,
    OrderCloseButton} from "../components/purchaseElements.js";
import Modal from "../components/Modal.js";
import logo from "../logo.svg"
 
const Purchase = () => {
    const apiUrl = env.APIURL;                              // saving the db API url as a const
    const vin = Cookies.get('purchaseVehicle');
    const [open, setOpen] = useState(false);                // declaration of the variables passed in Modal
    const [openErrPay, setOpenErrPay] = useState(false);    // declaration of the variables passed in Error Modal
    const [openErrFrm, setOpenErrFrm] = useState(false);    // declaration of the variables passed in Error Modal
    const [payErrTxt, setPayErrTxt] = useState("");         // declaration of the variables passed in Error Modal
    const [frmErrTxt, setFrmErrTxt] = useState("");         // declaration of the variables passed in Error Modal
    
    const [vehicleData, setVehicleData] = useState(null);   // store fetched customer data

    const [modalTitle, changeModText] = useState("Ready to Order?");   // declaration of the variables passed in Modal
    const [orderTot, changeTotalText] = useState("You Will Owe"); 

    const [availText, changeAvailText] = useState("Check Availability");    // declare variable to change availabilty button text

    const tradVal = Cookies.get('trade-in-value');

    const [orderPost, setOrderPost] = useState(null);                  // Declares values to be set in the Order form
    const [sName, setStName] = useState("");
    const [sNum, setStNum] = useState("");
    const [aptNum, setApt] = useState("");
    const [cityVal, setCity] = useState("");
    const [stateVal, setState] = useState("");
    const [zipVal, setZip] = useState("");

    const [buttonText, changeText] = useState("Connect Virtual Payment Method");    // flags to allow user to confirm order
    const [boolPayFlag, changePayFlag] = useState(false);
    const [boolFormFlag, changeFormFlag] = useState(false);
    const [boolConfFlag, changeConfFlag] = useState(true);                          // only allows one order to prevent spam

    function handleConfFlag() {      // sets confirm order flag
        changeConfFlag(false);
    }

    function changeModTitle() {                                        //function to change the modal title
        changeModText("Purchase Complete");
    };
    function setOrderTotal() {                                         //function to change order total text in modal
        changeTotalText("Order Total");
    };
    
    function setAvailT() {                                         //function to change order total text in modal
        changeAvailText("This Vehicle is Available");
    };

    const handlePayFlag = () => {           // displays that the payment method was added and sets flag true
        changeText("Virtual Payment Connected");
        changePayFlag(true);
    };
    const handleClose = () => {             // function to close the modal
        setOpen(false);
        setOpenErrPay(false);
        setOpenErrFrm(false);
    };
    const handleOpen = (inpPayFlag, inpFrmFlag) => {   // function to open the order error modal
        if (inpPayFlag && inpFrmFlag) {
            setOpen(true);
        } else if (inpPayFlag === false && inpFrmFlag === false){
            setOpenErrPay(true);
            setPayErrTxt("Add Payment Method");
            setOpenErrFrm(true);
            setFrmErrTxt("Submit The Order Form");
        } else if (inpFrmFlag === false){
            setOpenErrFrm(true);
            setFrmErrTxt("Submit The Order Form");
            setOpenErrPay(false);
            setPayErrTxt("");
        } else {
            setOpenErrPay(true);
            setPayErrTxt("Add Payment Method");
            setOpenErrFrm(false);
            setFrmErrTxt("");
        }
    };
    const ConfirmOrder = () => {    // confirms user's order and sets flag for created order
        changeModTitle();
        setOrderTotal();
        sendOrderData();
        handleConfFlag();
    };

    function handleSubmit(e) {      // sets order form flag to be complete
        e.preventDefault();
        changeFormFlag(true);
    } 
    function handleStName(e) { 
        setStName(e.target.value); 
    };
    function handleStNum(e) { 
        setStNum(e.target.value); 
    };
    function handleApt(e) { 
        setApt(e.target.value); 
    };
    function handleCity(e) { 
        setCity(e.target.value); 
    };
    function handleState(e) { 
        setState(e.target.value); 
    };
    function handleZip(e) { 
        setZip(e.target.value);  
    };

    const fetchVehicleData = async (vin) => {       // fetches data from api of /getVehicle
        try {
            const response = await axios.get(`${apiUrl}/getVehicleDetails/${vin}`);
            return response.data; // Assuming you expect only one vehicle data object
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Error fetching data');
        }
    };
    useEffect(() => {                               // calls functions to fetch necessary vehicle data
        const fetchData = async () => {
            try {
                const dataResponse = await fetchVehicleData(vin);
                setVehicleData(dataResponse);
                console.log(vehicleData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vin]);
    
    const sendOrderData = async () => {             // sends specific data entered in the Order form to create new order
        if (boolConfFlag) {
            try {
                const response = await axios.post(`${apiUrl}/newOrder`, {
                    "vin": vin,
                    "customer_id": 1,
                    "street_name": sName,
                    "street_number": sNum,
                    "apartment_number": aptNum,
                    "city": cityVal,
                    "state": stateVal,
                    "zip": zipVal
                });
                return response.data;
            } catch (error) {
                console.error('Error sending data:', error.response.data);
                throw new Error('Error sending data');
            }
        } 
    };
    useEffect(() => {                               // calls functions to send necessary Order form details
        const sendData = async () => {
            try {
                const dataResponse = await sendOrderData();

                setOrderPost(dataResponse);

                console.log(orderPost);
            } catch (error) {
                console.error('Error sending data:', error);
            }
        };
        sendData();
    }, []);
    
    if (!vehicleData) {
        // Data is loading, show loading indicator or return null
        return <div>Loading...</div>;
    } else
        Cookies.set('vehicle-value', vehicleData.msrp, {expires: 10});
    return (
        <div>
            <h1>Purchase</h1>
            <h2 style = {{marginLeft: 10}}>{vehicleData.year} {vehicleData.make} {vehicleData.model}</h2>
            <div>
                <GeneralRow>
                    <GeneralColumn>
                        <BoxForImage>
                        {vehicleData.photos.length > 0 && (
                            <img src={vehicleData.photos} height={270} alt={`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}/>
                        )}
                        </BoxForImage>
                        <VehicleDetailBox>
                            <h3>Vehicle Details:</h3>
                            <GeneralRow>
                                <CondDisp value = {vehicleData.mileage}/>
                            </GeneralRow>
                            <GeneralRow>
                                <VinDisp value = {vin}/>
                                <MileageDisp value = {vehicleData.mileage}/>
                            </GeneralRow>
                            <GeneralRow>
                                <YearDisp value = {vehicleData.year}/>
                                <MakeDisp value = {vehicleData.make}/>
                                <ModelDisp value = {vehicleData.model}/>
                            </GeneralRow>
                            <GeneralRow>
                                <ColorDisp value = {vehicleData.color}/>
                                <TypeDisp value = {vehicleData.type}/>
                            </GeneralRow>
                        </VehicleDetailBox>
                    </GeneralColumn>
                    <GeneralColumn>
                        <PriceBox>
                            <h3>Price Details:</h3>
                            <GeneralColumn>
                                <MSRPDisp value = {vehicleData.msrp}/>
                                <MpgCDisp value = {vehicleData['mpg-city']}/>
                                <MpgHDisp value = {vehicleData['mpg-hwy']}/>
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
                            <dt>Vehicle Price: ${vehicleData.msrp}</dt>
                            <dt>Trade-In Discount: ${tradVal}</dt>
                            <dd><strong>Your Current Price:</strong> ${vehicleData.msrp - tradVal}</dd>
                        </CurrentPriceBox>
                        <ButtonBox>
                            <GeneralRow>
                                <CalcButton/>
                                <AvailButton inpFunc={setAvailT} buttonT={availText}/>
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
                                    <dd><input id = 'Apt' placeholder = "Apt Number" value={aptNum} onInput={handleApt} required/></dd>
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
                                <OrderNowButton inpFunc={() => handleOpen(boolPayFlag, boolFormFlag)}/>
                                <Modal isOpen={open}>
                                    <>
                                        <h2>{modalTitle}</h2>
                                        <img src={logo} width = {50} height = {50} alt= "Logo"/>
                                        <h3>Details:</h3>
                                        <p>{orderTot}: ${vehicleData.msrp - tradVal}</p>
                                        <p>Next Day Shipping</p>
                                        <GeneralRow>
                                            <OrderConfirmButton inpFunc={ConfirmOrder}>Confirm Purchase</OrderConfirmButton>
                                            <OrderCloseButton inpFunc={handleClose}>Close order</OrderCloseButton> 
                                        </GeneralRow>  
                                    </>
                                </Modal>
                                <Modal isOpen={openErrPay || openErrFrm}>
                                    <>
                                        <p>Error: <dd>{payErrTxt} {frmErrTxt}</dd></p>
                                        <button onClick={handleClose}>Close</button>
                                    </>
                                </Modal>
                            </GeneralRow>
                            </GeneralColumn>
                        </OrderFormS>
                    </GeneralColumn>
                </GeneralRow>
            </div>
        </div>
    );
};
 
export default Purchase;