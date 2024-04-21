import React from "react";
import { ListAllVehicles } from "../components/Vehicle-Listings";
 
const Search = () => {
    return (
        <div>
            <h1>Search Results</h1>
            {/* Just adding a placeholder search bar */}
            <input type="search" placeholder="Search for vehicles"/>
            <ListAllVehicles></ListAllVehicles>
        </div>
    );
};
 
export default Search;