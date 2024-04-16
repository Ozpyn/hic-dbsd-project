import { useState } from "react";
import styled from "styled-components";

export const GeneralBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    height: 250px;
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
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleHistoryBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehicleConditionBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
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

export function YearForm() {
    const [year, setYear] = useState("2024");

    const handleChange = (event) => {
        setYear(event.target.value)
    }

    return (
        <form>
            <select value = {year} onChange = {handleChange}
            style = {{
                position: "relative",
                top: -40,
                left: 45,
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
            <p style = {{position: "relative", top: -90}}>Mileage:</p>
            <StyledInput placeholder = "Enter your mileage"
                style = {{
                    position: "relative", 
                    top: -127,
                    left: 73
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

  
export default function MakeForm() {
    const [make, setMake] = useState("N/A");
    //const [model, setModel] = useState("N/A")
   
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
            <div>
                <p style = {{position: "relative", top: -30}}>Make: </p>
                <select  
                    onChange = {handleMakeChange}
                    style = {{
                        position: "relative",
                        top: -70,
                        left: 54,
                    }}
                >
                    <option>N/A</option>
                    <option>Honda</option>
                    <option>Ford</option>
                    <option>BMW</option>
                </select>
            </div>
            <div>
                <p style = {{position: "relative", top: -60}}>Model: </p>
                <select
                    style = {{
                        position: "relative",
                        top: -100,
                        left: 60,
                    }}
                >
                    {options}
                </select>
            </div>
        </form>
    )
}

