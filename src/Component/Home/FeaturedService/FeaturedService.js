import React from 'react';
import feature from '../../../Image/auto-car-repair-service-center-mechanic-examining-car-suspension-auto-car-repair-service-center-mechanic-examining-car-suspension-166202482.jpg';

const FeatureService = () => {
    return (
           <section className="feature-service pb-0 pb-md-5 " style={{marginTop:'100px'}}>
               <div className="container mb-5">
                   <div className="row mb-5">
                       <div className="col-md-7 col-sm-12 mb-4 m-mb-0">
                           <img className="img-fluid" src={feature} alt=""/>

                       </div>
                       <div className="col-md-5 col-sm-12  align-self-center">
                           <h1> Who We Are</h1>
                           <p className="text-secondary mt-5"> Car Surgeous is an established New York based company, specialised in Car Repairs and Services, We repair out of warranty Cars.</p>
                           <button className="btn btn-info mt-3">Learn More</button>
                       </div>
                   </div>
               </div>
           </section> 
        
    );
};

export default FeatureService;