import React from 'react';


const Admins = ({adminData}) => {
    
    return (
     
        <div className="col-md-4 col-sm-12 text-center ">
            
            {/* <img style={{height:'190px',width:'250px'}}src={service.img} alt=""/> */}
            <h4 className="mt-3 mb-3">{adminData.name}</h4>
            <p>{adminData.email}</p>
           
        </div>
      

    );
};

export default Admins;