import React from "react";
import ListingTile, {MainContainer, ListingContainer, SectionHeader, MoreVehiclesButton, MoreVehiclesButtonContainer} from "../components/Vehicle-Listings.js";

const Home = () => {
    return (
        <div>

            {/* Section off the deals section using div tags*/}
            <div>
                <h1>Welcome to Online Dealership</h1>
                <SectionHeader>Best Deals</SectionHeader>
                <MainContainer>
                    <ListingContainer>

                        {/* 2015 Honda Accord */}
                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>

                        {/* 2002 Audi S6 */}
                        <ListingTile vin={"WUADUAFG1CN342714"} width={19}/>

                        {/* 2011 Ford F-150 */}
                        <ListingTile vin={"1FTFW1ET8BFC08090"} width={19}/>

                        {/* 2002 BMW 5 Series */}
                        <ListingTile vin={"JHMZE2H31DS895929"} width={19}/>

                    </ListingContainer>

                    <MoreVehiclesButtonContainer>
                        <MoreVehiclesButton/>
                    </MoreVehiclesButtonContainer>

                </MainContainer>
            </div>

            {/* separate the new car section from the deals section using different div tags*/ }
            <div>
                <SectionHeader>Newest Cars</SectionHeader>

                <MainContainer>

                    <ListingContainer>

                        {/* 2022 Toyota Camry */}
                        <ListingTile vin={"ABC123"} width={19}/>

                        {/* 2020 Ford Fusion */}
                        <ListingTile vin={"JTC8F4CL2Z2904612"} width={19}/> 

                        {/* 2018 Honda Civic */}
                        <ListingTile vin={"Y5HT3G9RK82CJVXW6"} width={19}/>                         

                        {/* 2015 Dodge Charger */}
                        <ListingTile vin={"2C3CDXCT7FH500278"} width={19}/>

                    </ListingContainer>

                    <MoreVehiclesButtonContainer>
                        <MoreVehiclesButton/>
                    </MoreVehiclesButtonContainer>
                    
                </MainContainer>
            </div>
        </div>

    );
};
 
export default Home;