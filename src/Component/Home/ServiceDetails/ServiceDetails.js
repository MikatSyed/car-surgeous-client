import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 col-sm-12 text-center">
            <img style={{height:'190px',width:'250px'}}src={service.img} alt=""/>
            <h4 className="mt-3 mb-3">{service.name}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptate?</p>
        </div>
    );
};

export default ServiceDetails;