import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import env from "react-dotenv";
import ListingTile from "../components/Vehicle-Listings";

const apiUrl = env.APIURL;
const tileWidth = 15;

const Ownership = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/getAllOwnership`);
                const data = response.data;
                setCustomerData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchCustomerNames = useMemo(() => {
        const cache = {};
        return async (customerIds) => {
            const promises = customerIds.map(async (customerId) => {
                if (cache[customerId]) {
                    return cache[customerId];
                } else {
                    try {
                        const response = await axios.get(`${apiUrl}/getCustomer/${customerId}`);
                        const name = `${response.data.first_name} ${response.data.last_name}`;
                        cache[customerId] = name;
                        return name;
                    } catch (error) {
                        console.error('Error fetching customer name:', error);
                        return '';
                    }
                }
            });
            return Promise.all(promises);
        };
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <div>
                        <h1>Customer Vehicles</h1>
                        {customerData.map((customer) => (
                            <div key={customer.customer_id} className="customer">
                                <CustomerVehicles customer={customer} fetchCustomerNames={fetchCustomerNames} />
                            </div>
                        ))}
                        <h1>All Vehicles</h1>
                        <VehicleList />
                    </div>
                </>
            )}
        </div>
    );
};

const CustomerVehicles = ({ customer, fetchCustomerNames }) => {
    const [vehicles, setVehicles] = useState([]);
    const [customerName, setCustomerName] = useState('');

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get(`${apiUrl}/getOwnership/${customer.customer_id}`);
                const data = response.data;
                const vehicleVins = data.map((vehicle) => vehicle.vehicle_vin);
                setVehicles(vehicleVins);
                const name = await fetchCustomerNames([customer.customer_id]);
                setCustomerName(name[0]);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, [customer, fetchCustomerNames]);

    return (
        <>
            <h2>{customerName}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {vehicles.map((vin) => (
                    <div key={vin} className="vehicle" style={{ flex: '0 0 20%', marginBottom: '20px' }}>
                        <ListingTile key={vin} vin={vin} />
                    </div>
                ))}
            <div style={{ flex: '0 0 100%', marginBottom: '20px' }}></div>
        </div>
    </>
    );
};

export const VehicleList = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/getAllVehicles`);
                const data = response.data;
                setVehicleData(data);
            } catch (error) {
                console.error('Error fetching vehicle data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {vehicleData.map((vehicle) => (
                <div key={vehicle.vin} className="vehicle" style={{ flex: '0 0 20%', marginBottom: '20px' }}>
                    <ListingTile key={vehicle.vin} vin={vehicle.vin} />
                </div>
            ))}
            <div style={{ flex: '0 0 100%', marginBottom: '20px' }}></div>
        </div>
    );
};

export default Ownership;
