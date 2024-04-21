import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import env from "react-dotenv";
import Cookies from 'js-cookie';
import axios from "axios";

const apiUrl = env.APIURL;

// Section header used for Today's Deals and Used cars 
export const SectionHeader = styled.h1`
    margin-top: 100px;
    padding-left: 20px;
`;


export const Listing = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
`;

// Box to add vehicle + details to
export const BoxForListing = styled.div`
    position: relative;
    width: ${props => props.width}%; /* Use template literal syntax to interpolate props */
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;


const RedirectToSearch = () => {
    window.location.href = "/search";
};


export const MoreVehiclesButton = () => {
    return (
        <button onClick={RedirectToSearch}
            style={{
                backgroundColor: "#fff",
                color: "#00000",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                alignSelf: "stretch",
                flexGrow: "1",
            }}
        >
            <h2>More Vehicles</h2>
            <h1>&rarr;</h1>
        </button>
    )
};


const RedirectToPurchasePage = (vin) => {
    window.location.href = "/purchase";
    Cookies.set('purchaseVehicle', vin);
};

export const PurchaseButton = ({ vin }) => {
    const handleClick = () => {
        RedirectToPurchasePage(vin);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: "#007bff",
                color: "#fff",
                height: "100%",
                width: "45%",
                margin: "2%",
                padding: "5% 8%",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "auto",
            }}
        >
            Purchase
        </button>
    );
};


const RedirectToSaveVehiclesPage = () => {
    window.location.href = "/saved-vehicles";
};


export const SaveVehicleButton = () => {
    return (
        <button onClick={RedirectToSaveVehiclesPage}
        style={{
            backgroundColor: "#007bff",
            color: "#fff",
            height: "100%",
            width: "45%",
            padding: "5% 5%",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }}   
        >
        Save Vehicle</button>
    );
}


const fetchVehicleData = async (vin) => {
    try {
        const response = await axios.get(`${apiUrl}/getVehicle/${vin}`);
        return response.data; // Assuming you expect only one vehicle data object
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data');
    }
};

const fetchVehicleFeatures = async (vin) => {
    try {
        const response = await axios.get(`${apiUrl}/getVehicleFeatures/${vin}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching features:', error);
        throw new Error('Error fetching features');
    }
};

const fetchVehiclePhotos = async (vin) => {
    try {
        const response = await axios.get(`${apiUrl}/getVehiclePhotos/${vin}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw new Error('Error fetching photos');
    }
};

const ListingTile = ({ vin, width }) => {
    const [vehicleData, setVehicleData] = useState(null);
    const [vehicleFeatures, setVehicleFeatures] = useState([]);
    const [vehiclePhotos, setVehiclePhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                try {
                    const dataResponse = await fetchVehicleData(vin);
                    setVehicleData(dataResponse);

                } catch (error) {
                    console.error('Error fetching data:', error);

                }
                try {
                    const featuresResponse = await fetchVehicleFeatures(vin);
                    setVehicleFeatures(featuresResponse);

                } catch (error) {
                    console.error('Error fetching Features:', error);

                }
                try {
                    const photosResponse = await fetchVehiclePhotos(vin);
                    setVehiclePhotos(photosResponse);

                } catch (error) {
                    console.error('Error fetching Photos:', error);

                }


                console.log(vehicleData);
                console.log(vehicleFeatures);
                console.log(vehiclePhotos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vin]);

    if (!vehicleData) {
        return <div>Loading...</div>;
    }

    return (
        <BoxForListing width={width}> {/* Render the BoxForListing component with the width prop */}
            {vehiclePhotos && vehiclePhotos.length > 0 && (
                <img
                    src={vehiclePhotos[0].photo}
                    alt={`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}
                    style={{ maxWidth: '100%' }}
                />
            )}

            <a href="/about-vehicle">
                <h3>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}</h3>
            </a>
            <p>{`${vehicleData.mileage} Miles`}</p>
            <p>{`$${vehicleData.msrp}`}</p>

            {vehicleFeatures && vehicleFeatures.length > 0 && (
                <>
                    <h4>Features:</h4>
                    <ul>
                        {vehicleFeatures.map((feature, index) => (
                            <li key={index}>{feature.feature}</li>
                        ))}
                    </ul>
                </>
            )}


            {/* Assuming ButtonContainer and PurchaseButton/SaveVehicleButton are defined elsewhere */}
            <ButtonContainer>
                <PurchaseButton vin={vin} />
                <SaveVehicleButton vin={vin} />
            </ButtonContainer>
        </BoxForListing>
    );

};


export default ListingTile;