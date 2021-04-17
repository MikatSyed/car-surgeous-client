import React from 'react';
import image1 from '../../../Image/download (1).jpg';
import image2 from '../../../Image/download (2).jpg';
import image3 from '../../../Image/Belts-and-Hoses-Maintenance-Part.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name:'ENGINE DIAGNOSTICS',
        img: image1
    },
    {
        name:'LUBE, OIL AND FILTERS',
        img: image2
    },
    {
        name:'BELTS AND HOSES',
        img: image3
    }
]
const Services = () => {
    return (
        <section>

        <div className="text-center mt-5">
             <h2 className="text-primary">Our Services</h2>
            <p className="text-secondary">We are one of the best car repairing service provider company in New York and repair your system at your home/office at very cheapest price</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row w-75 mt-5 pt-5">
               
           {
               serviceData.map(service => <ServiceDetails service={service}/>)
           }
          </div>
       </div>

        </section>
    );
};

export default Services;