import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import ListingTile from "../components/Vehicle-Listings"

const apiUrl = env.APIURL;

const Ownership = () => {
    // State to store the fetched customer data
    const [vehicleData, setVehicleData] = useState(null);
    // State to store loading state
    const [loading, setLoading] = useState(true);
    // State to store error message
    const [error, setError] = useState(null);

    // Function to fetch customer data from the API
    const fetchVehicleData = async () => {
        try {
            // Make API request to fetch customer data using Axios
            const response = await axios.get(`${apiUrl}/getAllVehicles`);
            // Parse the JSON response
            const data = response.data;
            // Set the fetched customer data in the state
            setVehicleData(data);
            // Set loading state to false
            setLoading(false);
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
            // Set error state to display error message
            setError(error.message);
            // Set loading state to false
            setLoading(false);
        }
    };

    // useEffect hook to fetch customer data when component mounts
    useEffect(() => {
        fetchVehicleData();
    }, []);

    return (
        <div>
            <h2>Vehicle List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <ListingTile vin="ABC123" />


                    <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
                    <div>
                        {vehicleData.map((vehicle, index) => (
                            <div key={index}>
                                <h3>Vehicle {index + 1}</h3>
                                <p><strong>VIN:</strong> {vehicle.vin}</p>
                                <p><strong>Make:</strong> {vehicle.make}</p>
                                <p><strong>Model:</strong> {vehicle.model}</p>
                                <p><strong>Year:</strong> {vehicle.year}</p>
                                <p><strong>Color:</strong> {vehicle.color}</p>
                                <p><strong>Type:</strong> {vehicle.type}</p>
                                <p><strong>Mileage:</strong> {vehicle.mileage}</p>
                                <p><strong>MPG (City):</strong> {vehicle['mpg-city']}</p>
                                <p><strong>MPG (Highway):</strong> {vehicle['mpg-hwy']}</p>
                                <p><strong>MSRP:</strong> ${vehicle.msrp}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

export default Ownership;
