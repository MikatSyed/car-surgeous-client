import React from 'react';
import Blog from '../Blog/Blog';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import FeatureService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Admin from '../Admin/Admin'
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
            <BusinessInfo/>
            <Services/>
           
            <FeatureService/>
            <Testimonial/>
            <Blog/>
            <Admin/>
          
          
            <Footer/>
          
        </div>
    );
};

export default Header;