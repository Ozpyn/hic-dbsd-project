import styled from "styled-components";

export const ButtonBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const BoxForImage = styled.div`
    position: relative;
    width: 400px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
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
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center", 
        }}
        >
        Check Avalailability</button>
    );
};
