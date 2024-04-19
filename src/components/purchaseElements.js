import { useState } from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
    display: relative;
    font-size: 14px; 
    padding: 1px; 
    border: 1px solid lightblue;
`;

export const GeneralColumn = styled.div`
    display: inline-grid;
    flex-wrap: nowrap;
    margin: 1%;
    padding: 5px;
`;

export const GeneralRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 5px;
`;

export const BoxForImage = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    align-self: start;
    margin: 1%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const VehicleDetailBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    margin: 1%;
    border-radius: 5px;
    align-self: end;
    flex-wrap: wrap;
    padding: 20px;
`;

export const PriceBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    margin: 1%;
    border-radius: 5px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const VehLocBox = styled.div`
    display: grid;
    border: 1px solid #ccc;
    margin: 1%;
    border-radius: 5px;
    align-self: end;
    flex-wrap: wrap;
    padding: 20px;
`;

export const CurrentPriceBox = styled.div`
    display: grid;
    border: 1px solid #ccc;
    margin: 1%;
    border-radius: 5px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const ButtonBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    margin: 1%;
    border-radius: 5px;
    align-self: end;
    flex-wrap: wrap;
    padding: 20px;
`;

export const OrderFormS = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-wrap: wrap;
    padding: 20px;
`;



const RedirectToCalc = () => {
    window.location.href = "/pay-calc";
};

const CheckAvail = () => {
    return alert('This Car is Available!');
}

export const CalcButton = () => {
    return(
        <button onClick={RedirectToCalc}
        style={{
            position: "relative",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            margin: "3%",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center", 
        }}
        >
        Send to Payment Calculator</button>
    );
};

export const AvailButton = () => {
    return(
        <button onClick={() => CheckAvail()}
        style={{
            position: "relative",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            margin: "3%",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center", 
        }}
        >
        Check Availability</button>
    );
};

export const AddPayMthdButton = ({flagFunc, buttonT}) => {
    return(
        <div>
            <button onClick={flagFunc}
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
            {buttonT}</button>
        </div>
    );
};
{/* 
export const OrderConfirmButton = () => {
    const [buttonText, changeText] = useState("Confirm order")

    const PayFlag = () => {
        changeText("Virtual Payment Connected");
        value = true;
    }

    return(
        <div>
            <button onClick={() => PayFlag()}
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
            {buttonText}</button>
        </div>
    );
};
*/}

export const CondDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Condition:</strong> {value}</label>
    )
}

export const VinDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>VIN:</strong> {value}</label>
    )
}

export const MileageDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Mileage:</strong> {value} miles</label>
    )
}

export const YearDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Year:</strong> {value}</label>
    )
}

export const MakeDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Make:</strong> {value}</label>
    )
}

export const ModelDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Model:</strong> {value}</label>
    )
}

export const StyleDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Style:</strong> {value}</label>
    )
}

export const ColorDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Color:</strong> {value}</label>
    )
}

export const TypeDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Type:</strong> {value}</label>
    )
}

export const MpgHDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Mpg-Highway:</strong> {value} mpg</label>
    )
}

export const MpgCDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>Mpg-City:</strong> {value} mpg</label>
    )
}

export const MSRPDisp = (fetchedVal) => {
    const {value} = fetchedVal
    return (
        <label style={{marginRight: 20, fontSize: 15}}><strong>MSRP:</strong> ${value}</label>
    )
}