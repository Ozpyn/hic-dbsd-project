import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import env from "react-dotenv";

const apiUrl = env.APIURL;  // Make sure your environment variable is set correctly

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
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>
            <h1>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            {vehicle.photos && vehicle.photos.length > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                    {vehicle.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`${vehicle.make} ${vehicle.model}`} style={{ width: '45%', height: 'auto' }} />
                    ))}
                </div>
            ) : <p>No images available.</p>}
            <p><strong>VIN:</strong> {vehicle.vin}</p>
            <p><strong>Color:</strong> {vehicle.color}</p>
            <p><strong>Mileage:</strong> {vehicle.mileage} miles</p>
            <p><strong>Fuel Efficiency:</strong> {vehicle.mpgCity} mpg city / {vehicle.mpgHwy} mpg highway</p>
            <p><strong>MSRP:</strong> ${vehicle.msrp.toLocaleString()}</p>
            <p><strong>Type:</strong> {vehicle.type}</p>
            {vehicle.features && vehicle.features.length > 0 ? (
                <div>
                    <h3>Features</h3>
                    <ul>
                        {vehicle.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ) : <p>No features listed.</p>}
        </div>
    );
};

export default AboutVehicle;
