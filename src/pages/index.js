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
                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>

                        <ListingTile vin={"WUADUAFG1CN342714"} width={19}/>

                        <ListingTile vin={"ABC123"} width={19}/>

                        <ListingTile vin={"JHMZE2H31DS895929"} width={19}/>
                    </ListingContainer>

                    <MoreVehiclesButtonContainer>
                        <MoreVehiclesButton/>
                    </MoreVehiclesButtonContainer>

                </MainContainer>
            </div>

            {/* separate the used car section from the deals section using different div tags*/ }
            <div>
                <SectionHeader>Used Cars</SectionHeader>

                <MainContainer>

                    <ListingContainer>
                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>

                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>

                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>

                        <ListingTile vin={"1HGCR2F35FA016731"} width={19}/>
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