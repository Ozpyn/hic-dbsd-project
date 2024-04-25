import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import env from "react-dotenv";

const apiUrl = env.APIURL;

const styles = {
    container: {
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        backgroundColor: '#fff',
        color: '#333'
    },
    header: {
        color: '#0056b3',
        marginBottom: '20px'
    },
    list: {
        listStyleType: 'none',
        padding: 0
    },
    listItem: {
        marginBottom: '10px'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px'
    },
    image: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '4px'
    },
    noData: {
        fontStyle: 'italic'
    }
};

const CheckVin = ({ vinToCheck }) => {
    const [orderIds, setOrderIds] = useState([]);
    const [ownershipIds, setOwnershipIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = axios.get(`${apiUrl}/getAllOrders`);
        const fetchOwnership = axios.get(`${apiUrl}/getAllOwnership`);
        Promise.all([fetchOrders, fetchOwnership])
            .then(([ordersResponse, ownershipResponse]) => {
                const orders = ordersResponse.data;
                const foundOrders = orders.filter(order => order.vehicle_vin === vinToCheck).map(order => order.id);
                setOrderIds(foundOrders);
                const ownerships = ownershipResponse.data;
                const foundOwnerships = ownerships.filter(ownership => ownership.vehicle_vin === vinToCheck).map(ownership => ownership.id);
                setOwnershipIds(foundOwnerships);
            })
            .catch(err => {
                setError('Failed to fetch data');
                console.error('API Error:', err);
            })
            .finally(() => setLoading(false));
    }, [vinToCheck]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Check VIN: {vinToCheck}</h1>
            <div>
                <h2>Order IDs with VIN</h2>
                {orderIds.length > 0 ? (
                    <ul style={styles.list}>{orderIds.map(id => <li key={id} style={styles.listItem}>{id}</li>)}</ul>
                ) : (
                    <p style={styles.noData}>No orders found with this VIN.</p>
                )}
            </div>
            <div>
                <h2>Ownership IDs with VIN</h2>
                {ownershipIds.length > 0 ? (
                    <ul style={styles.list}>{ownershipIds.map(id => <li key={id} style={styles.listItem}>{id}</li>)}</ul>
                ) : (
                    <p style={styles.noData}>No ownership records found with this VIN.</p>
                )}
            </div>
        </div>
    );
};

const AboutVehicle = () => {
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicleData = async () => {
            const vehicleVIN = Cookies.get('aboutVin'); // Get VIN from cookie
            if (!vehicleVIN) {
                setError('No vehicle VIN provided.');
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`${apiUrl}/getVehicleDetails/${vehicleVIN}`);
                setVehicle(response.data);
            } catch (error) {
                setError('Failed to fetch vehicle data.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicleData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!vehicle) return <p>No vehicle data available.</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            {vehicle.photos && vehicle.photos.length > 0 ? (
                <div style={styles.imageContainer}>
                    {vehicle.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`${vehicle.make} ${vehicle.model}`} style={styles.image} />
                    ))}
                </div>
            ) : <p style={styles.noData}>No images available.</p>}
            <div>
                <p><strong>VIN:</strong> {vehicle.vin}</p>
                <p><strong>Color:</strong> {vehicle.color}</p>
                <p><strong>Mileage:</strong> {vehicle.mileage} miles</p>
                <p><strong>Fuel Efficiency:</strong> {vehicle['mpg-city']} mpg city / {vehicle['mpg-hwy']} mpg highway</p>
                <p><strong>MSRP:</strong> ${vehicle.msrp.toLocaleString()}</p>
                <p><strong>Type:</strong> {vehicle.type}</p>
                {vehicle.features && vehicle.features.length > 0 ? (
                    <div>
                        <h3>Features</h3>
                        <ul style={styles.list}>
                            {vehicle.features.map((feature, index) => (
                                <li key={index} style={styles.listItem}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ) : <p style={styles.noData}>No features listed.</p>}
                <CheckVin vinToCheck={vehicle.vin} />
            </div>
        </div>
    );
};

export default AboutVehicle;
