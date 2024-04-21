import React from "react";
import ListingTile, {Listing, BoxForListing, PurchaseButton, SectionHeader, MoreVehiclesButton, SaveVehicleButton, ButtonContainer, ListingContent, BoxForMoreVehiclesButton, ListAllVehicles} from "../components/Vehicle-Listings.js";

const Home = () => {
    const TodaysDeals = ['1HGCR2F35FA016731', 'WUADUAFG1CN342714', 'WUADUAFG1CN342714', 'WUADUAFG1CN342714'];
    return (
        <div>

            {/* Section off the deals section using div tags*/}
            <div>
                <h1>Welcome to Online Dealership</h1>
                <SectionHeader>Today's Deals</SectionHeader>
            
                <Listing>
                    <ListingTile vin={"1HGCR2F35FA016731"} width={15}></ListingTile>

                    <ListingTile vin={"WUADUAFG1CN342714"} width={15}></ListingTile>

                    <ListingTile vin={"ABC123"} width={15}></ListingTile>

                    <ListingTile vin={"JHMZE2H31DS895929"} width={15}></ListingTile>

                    <BoxForMoreVehiclesButton height={50}>
                        <MoreVehiclesButton/>
                    </BoxForMoreVehiclesButton>

                </Listing>
            </div>

            {/* separate the used car section from the deals section using different div tags*/ }
            <div>
                <SectionHeader>Used Cars</SectionHeader>
                <Listing>
                <BoxForListing width={15}>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg" 
                            alt="2018 Honda Civic"/> 

                        <a href="/about-vehicle">
                            <h3>2018 Honda Civic</h3>
                        </a>
                        <p>10,000 Miles</p>
                        <p>$20,000</p>
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing width={15}>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg" 
                            alt="2018 Honda Civic"/> 

                        <a href="/about-vehicle">
                            <h3>2018 Honda Civic</h3>
                        </a>
                        <p>10,000 Miles</p>
                        <p>$20,000</p>
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing width={15}>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg" 
                            alt="2018 Honda Civic"/> 

                        <a href="/about-vehicle">
                            <h3>2018 Honda Civic</h3>
                        </a>
                        <p>10,000 Miles</p>
                        <p>$20,000</p>
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing width={15}>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg" 
                            alt="2018 Honda Civic"/> 

                        <a href="/about-vehicle">
                            <h3>2018 Honda Civic</h3>
                        </a>
                        <p>10,000 Miles</p>
                        <p>$20,000</p>
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing width={15}>
                        <MoreVehiclesButton/>
                    </BoxForListing>

                </Listing>
            </div>
        </div>

    );
};
 
export default Home;