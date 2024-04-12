import React from "react";
import {AvailButton, BoxForImage, ButtonBox, CalcButton} from "../components/purchaseElements.js";

 
const Purchase = () => {
    return (
        <div>
            <h1>Purchase</h1>
            <h2>ex</h2>
            <BoxForImage>
                <img src="https://edgecast-img.yahoo.net/mysterio/api/E27CFF5C773BF85E91E9D1129AFCC164333EAB53BB111DEB833624F3CED39C35/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC80HOC021B121001.jpg"
                    width = {400} height = {220} alt= "ex"/>
            </BoxForImage>
            <p>Vehicle Details</p>
            <ButtonBox>
                <CalcButton/>
                <AvailButton/>
            </ButtonBox>
        </div>
    );
};
 
export default Purchase;