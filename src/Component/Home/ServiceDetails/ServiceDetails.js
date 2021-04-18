import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 col-sm-12 text-center ">
            <Link to="/serviceDashboard"style={{textDecoration:'none', color:'black'}}>
            {/* <img style={{height:'190px',width:'250px'}}src={service.img} alt=""/> */}
            <h4 className="mt-3 mb-3">{service.name}</h4>
            <p>{service.description}</p>
            </Link>
        </div>
    );
};

export default ServiceDetails;