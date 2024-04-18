import { useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";

export const GeneralBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
    flex-direction: column;
`;

export const BoxRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    display: flex;
    justify-content: center;
`;

export const VehicleDetailBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleHistoryBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 275px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleConditionBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
`;

export const TradeInCalcBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
`;

const StyledInput = styled.input`
  display: relative;
  font-size: 14px; 
  padding: 1px; 
  border: 1px solid lightblue;
`;

export const PhotoRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction:row;
    padding: 5px;
`;

export const EngineColumn = styled.div`
    display: inline grid;
    margin-right: 50px;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
`;

export const TransmColumn = styled.div`
    display: inline grid;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
    align-items: center;
`;

export const ExterColumn = styled.div`
    display: inline grid;
    margin-right: 50px;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
`;

export const InterColumn = styled.div`
    display: inline grid;
    margin-right: 50px;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
`;

export const MechColumn = styled.div`
    display: inline grid;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
`;

// style and funtionality for the year dropdown box 
// in the Make and Model box
export function YearForm() {
    const [year, setYear] = useState("2024");

    const handleChange = (event) => {
        setYear(event.target.value)
    }

    return (
        <form style={{marginBottom: 30}}>
            <label for = 'dropdown'>Year: </label>
            <select id = 'dropdown' value = {year} onChange = {handleChange}
                style = {{
                    position: "relative",
                    left: 12
                }}
            >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
            </select>
        </form>
    )
}

// style and funtionality for the Mileage input 
// in the Make and Model box
export function MileageForm() {
    return (
        <form>
            <label for = 'textbox'>Mileage:</label>
            <StyledInput id = 'textbox' placeholder = "Enter your mileage"
                style = {{
                    position: "relative",
                    left: 12
                }}
            />
        </form>
    )
}

// style and funtionality for the "Add Photo" buttons 
// as well as their labels in the Add Photos box
export const AddPhotoButton = () => {
    const [buttonText, changeText] = useState("Upload Photo")

    return(
        <div style={{marginLeft: "auto"}}>
            <button onClick={() => changeText("Photo Uploaded")}
                style={{
                    fontSize: 12,
                    backgroundColor: "#007bff",
                    marginBottom: 16.5,
                    marginLeft: 50,
                    color: "#fff",
                    padding: "1px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
            {buttonText}</button>
        </div>
    );
};

// style and funtionality for the "Submit Trade" button
// at the bottom and end of the form
export const SubmitTradeButton = () => {
    const [buttonText, changeText] = useState("Get Trade-In Value")

    function DisplayTradeVal() {
        const tradVal = "Your Trade-In Value is $" 
            + Cookies.get('trade-in-value') || 0;   // Changes the button text to display
        changeText(tradVal);                        // the users trade in value
    }

    return(
        <button onClick={ () => DisplayTradeVal()}
            style={{
                marginLeft: "auto",
                fontSize: 12,
                backgroundColor: "#007bff",
                width: 150,
                color: "#fff",
                padding: "1px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignItems: "center"
            }}
        >
        {buttonText}</button>
    );
};

// function to redirect the user to the payment calculator
const RedirectToCalc = () => {
    window.location.href = "/pay-calc";
};

// Button using the redirect function to take the 
// user to the payment calculator upon click
export const SendToPayCalc = () => {
    
    return(
        <button onClick={RedirectToCalc}
            style={{
                marginRight: "auto",
                fontSize: 12,
                backgroundColor: "#007bff",
                marginLeft: 10,
                width: 150,
                color: "#fff",
                padding: "1px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignItems: "center"
            }}
        >
        Send to Payment Calculator</button>
    );
};

// style and funtionality for the engine dropdown box 
// in the Vehicle Details box
export function EngineForm() {
    const [engine, setEngine] = useState("Stock");

    const handleChange = (event) => {
        setEngine(event.target.value)
    }

    return (
        <form>
            <label for = 'engineInp'>Engine:</label>
            <select id ='engineInp' value = {engine} onChange = {handleChange}
                style = {{
                    position: "relative",
                    left: 12
                }}
            >
                <option>Stock</option>
                <option>Modified-Stock</option>
                <option>Swapped</option>
            </select>
        </form>
    )
};

// style and funtionality for the transmission dropdown box 
// in the Vehicle Details box
export function TransmForm() {
    const [transm, setTransm] = useState("Stock");

    const handleChange = (event) => {
        setTransm(event.target.value)
    }

    return (
        <form>
            <label for = 'transmInp'>Transmission:</label>
            <select id ='transmInp' value = {transm} onChange = {handleChange}
                style = {{
                    position: "relative",
                    left: 12
                }}
            >
                <option>Stock</option>
                <option>Modified-Stock</option>
                <option>Swapped</option>
            </select>
        </form>
    )
};

// style and funtionality for the wheel dropdown box 
// in the Vehicle Details box
export function WheelsForm() {
    const [wheels, setWheels] = useState("Stock");

    const handleChange = (event) => {
        setWheels(event.target.value)
    }

    return (
        <form style={{marginTop: 30}}>
            <label for = 'wheelsInp'>Wheels:</label>
            <select id ='wheelsInp' value = {wheels} onChange = {handleChange}
                style = {{
                    position: "relative",
                    left: 12
                }}
            >
                <option>Stock</option>
                <option>Custom-Alloy</option>
                <option>Custom-Steel</option>
            </select>
        </form>
    )
};

// style and funtionality for the custom modification details text area 
// in the Vehicle Details box
export function ModDesc() {
    return (
        <form>
            <p style={{marginTop: 30, fontSize: 15}}>Custom Modification in Detail:</p>
            <textarea type ="text" placeholder = "Enter a description of your custom modifications if necessary..."
                style = {{
                    resize: "none",
                    height: 50,
                    width: 250,
                }}
            ></textarea>
        </form>
    )
}

// style and funtionality for the Drive Train dropdown box 
// in the Vehicle Details box
export function DriTrForm() {
    const [dritr, setDriTr] = useState("FWD");

    const handleChange = (event) => {
        setDriTr(event.target.value)
    }

    return (
        <form style={{marginTop: 30}}>
            <label for = 'dritrInp'>Drive Train:</label>
            <select id ='dritrInp' value = {dritr} onChange = {handleChange}
                style = {{
                    position: "relative",
                    left: 12
                }}
            >
                <option>FWD</option>
                <option>RWD</option>
                <option>4WD</option>
                <option>AWD</option>
            </select>
        </form>
    )
};

// style and funtionality for the custom modification checkboxes 
// in the Vehicle Details box
export function CustomModCheck() {
    return(
        <form
            style={{
                marginTop: 30
            }}
        >
            <label>Custom Modifications</label>
            <div style={{marginLeft: 10}}>
                <div>
                    <input for = 'inter' type = "checkbox"/>
                    <label id = 'inter'>Interior</label>
                </div>
                <div>
                    <input for = 'exter' type = "checkbox"/>
                    <label id = 'exter'>Exterior</label>
                </div>
                <div>
                    <input for = 'mech' type = "checkbox"/>
                    <label id = 'mech'>Mechanical</label>
                </div>
            </div>
        </form>
    )
}

// style and funtionality for the exterior checkboxes 
// in the Vehicle Condition box
export function ExtCondCheck() {
    return(
        <form
            style={{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
            }}
        >
            <div style = {{marginLeft: 100}}>
                <label>Exterior</label>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'front' type = "checkbox"/>
                    <label id = 'front'>Front</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'driver' type = "checkbox"/>
                    <label id = 'driver'>Driver</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'rear' type = "checkbox"/>
                    <label id = 'rear'>Rear</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'pass' type = "checkbox"/>
                    <label id = 'pass'>Passenger</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'windlight' type = "checkbox"/>
                    <label id = 'windlight'>Windows/Light</label>
                </div>
            </div>
        </form>
    )
}

// style and funtionality for the interior checkboxes 
// in the Vehicle Condition box
export function IntCondCheck() {
    return(
        <form
            style={{
                marginRight: 30
            }}
        >
            <div style={{marginLeft: 10}}>
                <label>Interior</label>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'seat' type = "checkbox"/>
                    <label id = 'seat'>Seats</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'dash' type = "checkbox"/>
                    <label id = 'dash'>Dashboard</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'odor' type = "checkbox"/>
                    <label id = 'odor'>Odor</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'cargo' type = "checkbox"/>
                    <label id = 'pass'>Cargo</label>
                </div>
            </div>
        </form>
    )
}

// style and funtionality for the mechanical checkboxes 
// in the Vehicle Condition box
export function MechCondCheck() {
    return(
        <form
            style={{
                marginRight: 30
            }}
        >
            <div style={{marginLeft: 10}}>
                <label>Mechanical</label>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'engineetc' type = "checkbox"/>
                    <label id = 'engineetc'>Engine/Transmission/etc.</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'steer' type = "checkbox"/>
                    <label id = 'steer'>Steering</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'frame' type = "checkbox"/>
                    <label id = 'frame'>Frame/Air Bag/Sunroof</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'battery' type = "checkbox"/>
                    <label id = 'battery'>Battery</label>
                </div>
                <div style={{marginBottom: 15, marginLeft: 10}}>
                    <input for = 'heat' type = "checkbox"/>
                    <label id = 'heat'>Heating/AC</label>
                </div>
            </div>
        </form>
    )
}

// style and funtionality for the original owner dropdown box 
// in the Vehicle History box
export function OrigOwner() {
    const [own, setOwn] = useState("");

    const handleChange = (event) => {
        setOwn(event.target.value)
    }
    
    return (
        <form style={{marginBottom: 30}}>
            <label for = 'ownInp'>Original Owner:</label>
            <select id ='ownInp' value = {own} onChange = {handleChange}
            style = {{
                position: "relative",
                left: 12
            }}
            >
                <option></option>
                <option>Yes</option>
                <option>No</option>
            </select>
        </form> 
    )
}

// style and funtionality for the previous issues dropdown box 
// in the Vehicle History box
export function ChkIssues() {
    const [issues, setIssues] = useState("");

    const handleChange = (event) => {
        setIssues(event.target.value)
    }
    
    return (
        <form style={{marginBottom: 30}}>
            <label for = 'issInp'>Previous Accidents/Issues:</label>
            <select id ='issInp' value = {issues} onChange = {handleChange}
            style = {{
                position: "relative",
                left: 12
            }}
            >
                <option></option>
                <option>Yes</option>
                <option>No</option>
            </select>
        </form> 
    )
}

// style and funtionality for the vehicle rented dropdown box 
// in the Vehicle History box
export function ChkRent() {
    const [rented, setRented] = useState("");

    const handleChange = (event) => {
        setRented(event.target.value)
    }
    
    return (
        <form style={{marginBottom: 30}}>
            <label for = 'rentInp'>Used as Rental:</label>
            <select id ='rentInp' value = {rented} onChange = {handleChange}
            style = {{
                position: "relative",
                left: 12
            }}
            >
                <option></option>
                <option>Yes</option>
                <option>No</option>
            </select>
        </form> 
    )
}

// functionality of creating the trade-in value
export function CreateTradeVal() {
    let randTradeVal = Math.floor(Math.random()* (10999 - 4999 + 1)) + 4999;    // makes trade-in value 
    Cookies.set('trade-in-value', randTradeVal, {expires: 10});                 // between 4999 and 10999
}

// style and funtionality for the make and model dropdown boxes
// in the Make and Model box
export default function MakeForm() {
    const [make, setMake] = useState("N/A");

   
    const handleMakeChange = (event) => {
        setMake(event.target.value)         // handles the event of changing the make 
        CreateTradeVal()                    // all awhile creating the trade-in value for the user
    }                                       // using the called CreateTradeVal function
    
    const hondaModels = ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "Fit", "HR-V", "Ridgeline", "Insight", "Passport"];
    const fordModels = ["F-150", "Escape", "Focus", "Explorer", "Edge", "Mustang", "Fusion", "Ranger", "Expedition", "Transit"];
    const toyotaModels = ["Corolla", "Camry", "RAV4", "Highlander", "Tacoma", "Prius", "Sienna", "Tundra", "4Runner", "C-HR"];
    const chevroletModels = ["Silverado", "Equinox", "Tahoe", "Malibu", "Traverse", "Camaro", "Colorado", "Suburban", "Impala", "Blazer"];
    const nissanModels = ["Altima", "Rogue", "Sentra", "Pathfinder", "Maxima", "Murano", "Versa", "Titan", "Frontier", "Armada"];
    const mercedesBenzModels = ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLA", "A-Class", "CLA", "GLS", "G-Class"];
    const bmwModels = ["3 Series", "5 Series", "X3", "X5", "X1", "7 Series", "4 Series", "X7", "2 Series", "6 Series"];
    const audiModels = ["A3", "A4", "A6", "Q5", "Q7", "Q3", "A5", "Q8", "A7", "TT"];
    const volkswagenModels = ["Jetta", "Passat", "Tiguan", "Golf", "Atlas", "Arteon", "Beetle", "Atlas Cross Sport", "ID.4", "Touareg"];
    const hyundaiModels = ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona", "Palisade", "Accent", "Venue", "Veloster", "Ioniq"];
    const kiaModels = ["Optima", "Forte", "Sorento", "Sportage", "Soul", "Telluride", "Rio", "Stinger", "Niro", "Cadenza"];
    const subaruModels = ["Forester", "Outback", "Crosstrek", "Legacy", "Impreza", "Ascent", "WRX", "BRZ", "XV"];
    const lexusModels = ["RX", "ES", "NX", "IS", "UX", "GX", "LS", "RC", "LX", "LC"];
    const jeepModels = ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator", "Wagoneer", "Grand Wagoneer"];
    const volvoModels = ["XC90", "XC60", "S60", "S90", "V60", "V90", "XC40", "V40", "C40 Recharge", "XC100 Recharge"];
    const teslaModels = ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster"];
    const mazdaModels = ["Mazda3", "Mazda6", "CX-5", "CX-9", "CX-3", "MX-5 Miata", "CX-30", "MX-30", "RX-7", "RX-8"];
    const gmcModels = ["Sierra", "Terrain", "Acadia", "Yukon", "Canyon", "Savana"];
    const buickModels = ["Encore", "Enclave", "Regal", "Envision"];

    let type = null
    let options = null

    if(make === "Honda") {
        type = hondaModels
    } else if (make === "Ford") {
        type = fordModels
    } else if (make === "BMW") {
        type = bmwModels
    } else if (make === "Toyota") {
        type = toyotaModels;
    } else if (make === "Chevrolet") {
        type = chevroletModels;
    } else if (make === "Nissan") {
        type = nissanModels;
    } else if (make === "Mercedes-Benz") {
        type = mercedesBenzModels;
    } else if (make === "Audi") {
        type = audiModels;
    } else if (make === "Volkswagen") {
        type = volkswagenModels;
    } else if (make === "Hyundai") {
        type = hyundaiModels;
    } else if (make === "Kia") {
        type = kiaModels;
    } else if (make === "Subaru") {
        type = subaruModels;
    } else if (make === "Lexus") {
        type = lexusModels;
    } else if (make === "Jeep") {
        type = jeepModels;
    } else if (make === "Volvo") {
        type = volvoModels;
    } else if (make === "Tesla") {
        type = teslaModels;
    } else if (make === "Mazda") {
        type = mazdaModels;
    } else if (make === "GMC") {
        type = gmcModels;
    } else if (make === "Buick") {
        type = buickModels;
    }

    if (type) {
        options = type.map((el) => <option key = {el}>{el}</option>)    // sets the options of the 
    }                                                                   // model dropdown box

    return (
        <form>
            {/*Make: Dropdown*/}
            <div style={{marginBottom: 30}}>
                <label for = 'dropdown'>Make: </label>
                <select id = 'dropdown' onChange = {handleMakeChange}
                    style = {{
                        position: "relative",
                        left: 12
                    }}
                >
                    <option>N/A</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Ford</option>
                    <option>Chevrolet</option>
                    <option>Nissan</option>
                    <option>Mercedes-Benz</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Volkswagen</option>
                    <option>Hyundai</option>
                    <option>Kia</option>
                    <option>Subaru</option>
                    <option>Lexus</option>
                    <option>Jeep</option>
                    <option>Volvo</option>
                    <option>Tesla</option>
                    <option>Mazda</option>
                    <option>GMC</option>
                    <option>Buick</option>
                </select>
            </div>
            {/*Model: Dropdown*/}
            <div style={{marginBottom: 30}}>
                <label for = 'dropdown'>Model: </label>
                <select id = 'dropdown'
                    style = {{
                        position: "relative",
                        left: 12
                    }}
                >
                    {options}
                </select>
            </div>
        </form>
    )

}

