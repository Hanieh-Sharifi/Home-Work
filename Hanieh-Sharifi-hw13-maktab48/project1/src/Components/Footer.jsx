import React from 'react';
import {FaRegCopyright} from "react-icons/fa";

function Footer() {
    return (
        <footer id="footer" className="footer-main-parent">
            <h1 className="footer-main-text" >Best weathers around the world</h1>
            <div className="footer-ul-parent">
                <ul className="footer-ul">
                    <li>&nbsp;Hilo, Hawaii</li>
                    <li>&nbsp;Portland, Oregon</li>
                    <li>&nbsp;Key West, Florida</li>
                    <li>&nbsp;Hot Springs, Arkansas</li>
                    <li>&nbsp;San Diego, California</li>
                </ul>
                <ul className="footer-ul">
                    <li>&nbsp;Carlsbad, California</li>
                    <li>&nbsp;New Orleans, Louisiana</li>
                    <li>&nbsp;Sherman, Texas</li>
                    <li>&nbsp;Greenville, South Carolina</li>
                    <li>&nbsp;St. George, Utah</li>
                </ul>
                <ul className="footer-ul">
                    <li>&nbsp;Atlanta, Georgia</li>
                    <li>&nbsp;Boise, Idaho</li>
                    <li>&nbsp;Sarasota, Florida</li>
                    <li>&nbsp;Scottsdale, Arizona</li>
                    <li>&nbsp;Cape Coral, Florida</li>
                </ul>
            </div>
            <p className="copy-right">Copyright&nbsp; <FaRegCopyright/>&nbsp; 2021&nbsp; .&nbsp; All rights reserved .</p>
        </footer>
    )
}

export default Footer
