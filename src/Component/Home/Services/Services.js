import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {
    const [services,setServices] = useState([]);
useEffect(()=> {
    fetch('http://localhost:8000/events')
    .then(res => res.json())
    .then(data =>setServices(data))
},[])
    return (
        <section>

        <div className="text-center mt-5">
             <h2 className="text-primary">Our Services</h2>
            <p className="text-secondary">We are one of the best car repairing service provider company in New York and repair your system at your home/office at very cheapest price</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row w-75 mt-5 pt-5">
               
           {
               services.map(service => <ServiceDetails service={service}/>)
           }
          </div>
       </div>

        </section>
    );
};

export default Services;