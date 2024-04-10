import styled from "styled-components";

export const Listing = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const BoxForListing = styled.div`
    position: relative;
    width: 300px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;

const RedirectToPurchasePage = () => {
    window.location.href = "/purchase";
};



export const PurchaseButton = () => {
    return(
        <button onClick={RedirectToPurchasePage}
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
        Purchase</button>
    );
};
