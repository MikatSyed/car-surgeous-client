import React from 'react';
import './Footer.css';
import FooterCol from '../../../Component/Home/FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Belts and Hoses" , link: "/emergency"},
        {name: "Tire and Wheel Services" , link: "/checkup"},
        {name: "Air Conditioning" , link: "/personal-treatment"},
        {name: "Brake Repair" , link: "/tooth-extract"},
        {name: "Tire and Wheel Services" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Engine Diagnostics" , link: "/service"},
        {name: "Lube, Oil and Filters" , link: "/checkup"},
        {name: "Belts and Hoses" , link: "/personal-treatment"},
        {name: "Air Conditioning" , link: "/service-extract"},
        {name: "Brake Repair" , link: "/checkup"},
        {name: "Tire and Wheel Services" , link: "/checkup"},
        {name: "Other Car Services" , link: "/checkup"}
    ]
    const services = [
        {name: "Engine Diagnostics" , link: "/emergency"},
        {name: "Tire and Wheel Services" , link: "/checkup"},
        {name: "Lube, Oil and Filters" , link: "/personal-treatment"},
        {name: "Tire and Wheel Services" , link: "/service-extract"},
        {name: "Belts and Hoses" , link: "/checkup"},
        {name: "Air Conditioning" , link: "/checkup"},
        {name: "Other Car Servicesp" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5 ">
                <div className="row py-5 ">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Popular Tags" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-info">Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;