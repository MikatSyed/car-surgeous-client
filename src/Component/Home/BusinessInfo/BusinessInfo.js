import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMoneyBill,faTools,faHandPeace } from '@fortawesome/free-solid-svg-icons'
const InfoData = [
    {
        title : 'No Fix No Fee',
        description : 'We are so confident with our service that if we can’t fix the problem, you don’t pay. All repairs come with a 30 day guarantee.',
        icon : faMoneyBill,
        background : 'primary'
    },
    {
        title : 'Quick Repair Process',
        description : 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        icon : faTools,
        background : 'dark'
    },
    {
        title : '30 Days Warranty',
        description : 'This means if you have a recurring problem, just pick up and repair it free of charge*!',
        icon : faHandPeace,
        background : 'primary'
    }
]

const BusinessInfo = () => {
    return (
       <section className="d-flex justify-content-center">
          <div className="row w-75 ">
               
           {
               InfoData.map(info => <InfoCard info={info}></InfoCard>)
           }
          </div>
       </section>
    );
};

export default BusinessInfo;