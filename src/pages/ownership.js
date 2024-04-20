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

    function CustomerVehicles({ customerId }) {
        const [vehicles, setVehicles] = useState([]);

        useEffect(() => {
            async function fetchVehicles() {
                const response = await fetch(`${apiUrl}/getOwnership/${customerId}`);
                const data = await response.json();
                const vehicleVins = data.map(vehicle => vehicle.vehicle_vin);
                setVehicles(vehicleVins);
            }

            fetchVehicles();
        }, [customerId]);

        return (
            <div>
                {vehicles.map(vin => (
                    <ListingTile key={vin} vin={vin} width={15} />
                ))}
            </div>
        );
    }

    function CustomerList() {
        const [customers, setCustomers] = useState([]);

        useEffect(() => {
            async function fetchCustomers() {
                const response = await fetch(`${apiUrl}/getAllCustomers`);
                const data = await response.json();
                setCustomers(data);
            }

            fetchCustomers();
        }, []);

        return (
            <div>
                {customers.map(customer => (
                    <div key={customer.id} className="customer">
                        <h2>{customer.first_name} {customer.last_name}:</h2>
                        <CustomerVehicles customerId={customer.id} />
                    </div>
                ))}
            </div>
        );
    }

    function VehicleList() {
        const [allVehicles, setAllVehicles] = useState([]);

        useEffect(() => {
            async function fetchAllVehicles() {
                const response = await fetch(`${apiUrl}/getAllVehicles`);
                const data = await response.json();
                setAllVehicles(data);
            }

            fetchAllVehicles();
        }, []);

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allVehicles.map(vehicle => (
                    <div key={vehicle.vin} className="vehicle" style={{ flex: '0 0 20%', marginBottom: '20px' }}> {/* Adjust flex basis to 20% */}
                        <ListingTile key={vehicle.vin} vin={vehicle.vin} width={80} />
                    </div>
                ))}
                <div style={{ flex: '0 0 100%', marginBottom: '20px' }}></div> {/* Add an empty div to force flex items to fill the row */}
            </div>
        );
    }

    function newVehicleTile(vin) {
        return (
            <ListingTile vin={vin} width={5} />
        )
    }

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

                    {/* <div><ListingTile vin="ABC123" /></div> */}
                    <div>
                        <h1>Customer Vehicles</h1>
                        <CustomerList />
                        <h1>All Vehicles</h1>
                        <VehicleList />
                    </div>

                    {/* <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
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
                    </div> */}
                </>
            )}

        </div>
    );
};

export default Ownership;
