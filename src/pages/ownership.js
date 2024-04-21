import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import ListingTile from "../components/Vehicle-Listings"

const apiUrl = env.APIURL;
const tileWidth = 15;

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
                console.log(data);
                console.log("^Vehicle owned by Customer")
                if (data && data.length > 0) {
                    const vehicleVins = data.map(vehicle => vehicle.vehicle_vin);
                    setVehicles(vehicleVins);
                }
            }

            fetchVehicles();
        }, [customerId]);

        return (
            <div>
                {vehicles.map(vin => (
                    <ListingTile key={vin} vin={vin} width={tileWidth} />
                ))}
            </div>
        );
    }

    function CustomerList() {
        const [customers, setCustomers] = useState([]);

        useEffect(() => {
            async function fetchCustomers() {
                const response = await fetch(`${apiUrl}/getAllOwnership`);
                const data = await response.json();
                const customerIds = data.map(item => item.customer_id);
                const uniqueCustomerIds = [...new Set(customerIds)]; // Get unique customer IDs
                setCustomers(uniqueCustomerIds);
            }

            fetchCustomers();
        }, []);

        useEffect(() => {
            async function fetchCustomerNames() {
                const promises = customers.map(async customerId => {
                    try {
                        const response = await fetch(`${apiUrl}/getCustomer/${customerId}`);
                        const data = await response.json();
                        return `${data.first_name} ${data.last_name}`;
                    } catch (error) {
                        console.error('Error fetching customer:', error);
                        return '';
                    }
                });
                const names = await Promise.all(promises);
                setCustomerNames(names);
            }

            if (customers.length > 0) {
                fetchCustomerNames();
            }
        }, [customers]);

        const [customerNames, setCustomerNames] = useState([]);

        return (
            <div>
                {customerNames.map((customerName, index) => (
                    <div key={customers[index]} className="customer">
                        <h2>{customerName}</h2>
                        <CustomerVehicles customerId={customers[index]} />
                    </div>
                ))}
            </div>
        );
    }

    function VehicleList() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {vehicleData.map(vehicle => (
                    <div key={vehicle.vin} className="vehicle" style={{ flex: '0 0 20%', marginBottom: '20px' }}> {/* Adjust flex basis to 20% */}
                        <ListingTile key={vehicle.vin} vin={vehicle.vin} width={80} />
                    </div>
                ))}
                <div style={{ flex: '0 0 100%', marginBottom: '20px' }}></div> {/* Add an empty div to force flex items to fill the row */}
            </div>
        );
    }

    // useEffect hook to fetch vehicle data when component mounts
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
                    <div>
                        <h1>Customer Vehicles</h1>
                        <CustomerList />
                        <h1>All Vehicles</h1>
                        <VehicleList />
                    </div>
                </>
            )}

        </div>
    );
};

export default Ownership;
