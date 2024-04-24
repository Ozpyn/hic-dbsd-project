import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import env from "react-dotenv";
import ListingTile from "../components/Vehicle-Listings";

const apiUrl = env.APIURL;

const SavedVehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const tileWidth = "300px";  // Placeholder: adjust as necessary

    useEffect(() => {
        setLoading(true);
        async function fetchVehicleDetails(vin) {
            try {
                const response = await fetch(`${apiUrl}/getVehicle/${vin}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Failed to fetch vehicle data:', error);
                return null;  // Return null if there is an error
            }
        }

        const savedVins = Cookies.get('savedVehicles');
        if (savedVins) {
            const vins = JSON.parse(savedVins);
            Promise.all(vins.map(fetchVehicleDetails))
                .then(vehicles => {
                    setVehicles(vehicles.filter(vehicle => vehicle !== null));
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Failed to fetch vehicle data:', error);
                    setError('Failed to load vehicles');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) return <p>Loading vehicles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {vehicles.length > 0 ? (
                vehicles.map(vehicle => (
                    <ListingTile vin={vehicle.vin} width={tileWidth} />
                ))
            ) : (
                <p>No saved vehicles.</p>
            )}
        </div>
    );
};

export default SavedVehiclesList;
