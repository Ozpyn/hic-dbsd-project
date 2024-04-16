import { useState } from "react";
import styled from "styled-components";

export const GeneralBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 23%;
    height: 275px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
    flex-direction: column;
`;

export const BoxRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
`;

export const VehicleDetailBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 38%;
    height: 275px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleHistoryBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 20%;
    height: 275px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleConditionBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 63%;
    height: 275px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

const StyledInput = styled.input`
  display: relative;
  font-size: 14px; 
  padding: 1px; 
  border: 1px solid lightblue;
`;

export const PhotoColumn = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
    align-items: center;
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
                <option value = "2024">2024</option>
                <option value = "2023">2023</option>
                <option value = "2022">2022</option>
            </select>
        </form>
    )
}



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

export const AddPhotoButton = () => {
    const [buttonText, changeText] = useState("Upload Photo")

    return(
        <button onClick={() => changeText("Photo Uploaded")}
            style={{
                position: "relative",
                top: -187,
                left: 100,
                height: 20,
                width: 130,
                fontSize: 12,
                backgroundColor: "#007bff",
                marginBottom: 16.5,
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

export const SubmitTradeButton = () => {
    
    return(
        <button
            style={{
                position: "relative",
                top: -187,
                left: 100,
                height: 20,
                width: 130,
                fontSize: 12,
                backgroundColor: "#007bff",
                marginBottom: 16.5,
                color: "#fff",
                padding: "1px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignItems: "center"
            }}
        >
        Get Trade-In Value</button>
    );
};

export const SendToPayCalc = () => {
    
    return(
        <button
            style={{
                position: "relative",
                top: -187,
                left: 100,
                height: 20,
                width: 130,
                fontSize: 12,
                backgroundColor: "#007bff",
                marginBottom: 16.5,
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

  
export default function MakeForm() {
    const [make, setMake] = useState("N/A");
   
    const handleMakeChange = (event) => {
        setMake(event.target.value)
    }
    
    const hondaModels = ["Civic", "Accord"]
    const fordModels = ["Focus", "Escape", "Mustang"]
    const bmwModels = ["M3", "M4", "XM"]

    let type = null
    let options = null

    if(make === "Honda") {
        type = hondaModels
    } else if (make === "Ford") {
        type = fordModels
    } else if (make === "BMW") {
        type = bmwModels
    }

    if (type) {
        options = type.map((el) => <option key = {el}>{el}</option>)
    }

    return (
        <form>
            <div style={{marginBottom: 30}}>
                <label for = 'dropdown'>Make: </label>
                <select id = 'dropdown' onChange = {handleMakeChange}
                    style = {{
                        position: "relative",
                        left: 12
                    }}
                >
                    <option>N/A</option>
                    <option>Honda</option>
                    <option>Ford</option>
                    <option>BMW</option>
                </select>
            </div>
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

