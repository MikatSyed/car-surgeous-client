import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({info}) => {

    return (
    
        <div className="col-md-4 col-sm-12  text-white justify-content-center info-card ">
          
          <div className={` info-${info.background} info-container`}>   
            <div className="text-center text-white "  >
            <FontAwesomeIcon icon={info.icon} className="font-icon mb-3 text-info "></FontAwesomeIcon>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
            </div>
          </div>
        </div>
        
    );
};

export default InfoCard;