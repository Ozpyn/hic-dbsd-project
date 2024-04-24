import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ListOfAllVehicles, searchForVehicles } from "../components/SearchElements";
import ListingTile from "../components/Vehicle-Listings";




const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q");

    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (searchQuery) {
                    data = await searchForVehicles(searchQuery);
                }
                else {
                    data = await ListOfAllVehicles();
                }
                setVehicleData(data);
            }
            catch (error) {
                console.error('Error:', error)
                setVehicleData([]);
            }
        };

        fetchData();
        
    }, [searchQuery]);
    
    // Checks if there are no vehicles that match the query
    if (!vehicleData.length) {
        return <div><h1>No vehicles found</h1></div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {vehicleData.map (vehicle => (
                    <div key={vehicle.vin} className="vehicle" style={{ flex: '0 0 20%', marginBottom: '20px' }}>
                        <ListingTile vin={vehicle.vin} width={80} />
                    </div>
                ))}
            </div>
            <div style={{ flex: '0 0 100%', marginBottom: '20px' }}></div>
        </div>
        );
    };
 
export default Search;