import styled from "styled-components";

// Section header used for Today's Deals and Used cars 
export const SectionHeader = styled.h1`
    margin-top: 100px;
    padding-left: 20px;
`;

export const Listing = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 5px;
`;

// Box to add vehicle + details to
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


const RedirectToSearch = () => {
    window.location.href = "/search";
};

export const MoreVehiclesButton = () => {
    return (
        <button onClick={RedirectToSearch}
            style= {{
                backgroundColor: "#666",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignSelf: "stretch",
                flexGrow: "1",
            }}
        >
            <h2>More Vehicles</h2> 
        </button>
    )
};

const RedirectToPurchasePage = () => {
    window.location.href = "/purchase";
};

export const PurchaseButton = () => {
    return(
        <button onClick={RedirectToPurchasePage}
        style= {{
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
