import styled from "styled-components";

export const GeneralColumn = styled.div`
    display: inline grid;
    flex-wrap: nowrap;
    flex-direction:column;
    padding: 5px;
`;
export const GeneralRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction:row;
    padding: 5px;
`;

export const BoxForImage = styled.div`
    position: relative;
    margin: 1%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const VehicleDetailBox = styled.div`
    display: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1%;
    flex-wrap: wrap;
    padding: 20px;
`;

export const ButtonBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
    flex-wrap: wrap;
    padding: 20px;
`;

export const OrderBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
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
            right: 5,
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
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
            left: 5,
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center", 
        }}
        >
        Check Availability</button>
    );
};

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