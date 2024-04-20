import React from "react";
import {Listing, BoxForListing, PurchaseButton, SectionHeader, MoreVehiclesButton, SaveVehicleButton, ButtonContainer} from "../components/Vehicle-Listings.js";

const Home = () => {
    return (
        <div>

            {/* Section off the deals section using div tags*/}
            <div>
                <h1>Welcome to Online Dealership</h1>
                <SectionHeader>Today's Deals</SectionHeader>
                <Listing>
                    <BoxForListing>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg" 
                            alt="2018 Honda Civic"/> 

                        <a href="/about-vehicle">
                            <h3>2018 Honda Civic</h3>
                        </a>
                        <p>Brand New</p>
                        <p>$19,740</p> {/* msrp for Honda Civic LX (auto) sedan*/}
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton vin={"ABC123"}/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing>
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

                    <BoxForListing>
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

                    <BoxForListing>
                        <img src="https://edgecast-img.yahoo.net/mysterio/api/C4A5DCD0F6512F14C88B112733DC604FAB5E403244052959706EE5DAAC709737/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC90FOC201B021001.jpg" 
                            alt="2020 Ford Fusion"/> 
                        <a href="/about-vehicle">
                            <h3>2020 Ford Fusion</h3>
                        </a>
                        <p>Brand New</p>
                        <p>$23,170</p> {/* actual msrp for the ford fusion s sedan*/}
                        <p>Other vehicle details we want</p>

                        <ButtonContainer>
                            <PurchaseButton/>
                            <SaveVehicleButton/>
                        </ButtonContainer>

                    </BoxForListing>

                    <BoxForListing>
                        <MoreVehiclesButton/>
                    </BoxForListing>

                </Listing>
            </div>

            {/* separate the used car section from the deals section using different div tags*/ }
            <div>
                <SectionHeader>Used Cars</SectionHeader>
                <Listing>
                    <BoxForListing>
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

                    <BoxForListing>
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

                    <BoxForListing>
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

                    <BoxForListing>
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

                    <BoxForListing>
                        <MoreVehiclesButton/>
                    </BoxForListing>

                </Listing>
            </div>
        </div>

    );
};
 
export default Home;