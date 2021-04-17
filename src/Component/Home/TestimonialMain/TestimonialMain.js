import React from 'react';

const TestimonialMain = (props) => {

    const {quote,name,from ,img} = props.testimonial;
 
    return (
        <div className="card shadow-sm bg-info " >
            <div className="card-body">
                <p className="card-text text-center text-white">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="100px" height="100px"/>
                <div>
                    <h6 className=" text-white">{name}</h6>
                    <p className="m-0 text-white">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default TestimonialMain;