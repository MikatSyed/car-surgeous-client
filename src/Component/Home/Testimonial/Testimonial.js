import React, { useEffect, useState } from 'react';
import TestimonialMain from '../TestimonialMain/TestimonialMain';

import './Testimonial.css';
// import picture1 from '../../../Image/automobile_engineering_Anthony_King.jpg';
// import picture2 from '../../../Image/automobile_engineering_Jen-Hsun_Huang_resize_md.jpg';
// import picture3 from '../../../Image/automobile_engineering_Taehee_Han_resize_md.jpg';

// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : ' Dr. Lucian Gheorghe',
//         from : 'California',
//         img : picture1
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Keyvan Mohajer',
//         from : 'America',
//         img : picture2
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Jen-Hsun Huang',
//         from : 'China',
//         img : picture3
//     }
// ]

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8000/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Customer<br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                       reviews.map(review => <TestimonialMain review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;