import React, { useState, useEffect } from "react";
const apiUrl = process.env.DBURL;

const Ownership = () => {
    // State to store the fetched customer data
    const [customerData, setCustomerData] = useState([]);

    // Function to fetch customer data from the API
    const fetchCustomerData = async () => {
        try {
            // Make API request to fetch customer data
            const response = await fetch(`${apiUrl}/customers`);
            if (!response.ok) {
                throw new Error('Failed to fetch customer data');
            }
            // Parse the JSON response
            const data = await response.json();
            // Set the fetched customer data in the state
            setCustomerData(data);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    // useEffect hook to fetch customer data when component mounts
    useEffect(() => {
        fetchCustomerData();
    }, []);

    return (
        <div>
            <h2>Vehicle List</h2>
            {/* Display vehicle lists for each customer */}
            {customerData.map(customer => (
                <div key={customer.customerId}>
                    <h3>Customer {customer.customerId}</h3>
                    {customer.vehicles && customer.vehicles.length > 0 ? (
                        // If customer has vehicles, display them
                        <ul>
                            {customer.vehicles.map(vehicle => (
                                <li key={vehicle.VIN}>{vehicle.VIN}</li>
                            ))}
                        </ul>
                    ) : (
                        // If customer has no vehicles, display a message
                        <p>No vehicles found for this customer</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Ownership;
