import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import image from '../../../Image/images (1).jpg';
import './Blog.css'


const blogData = [
    {
        title : 'CAR AUDIO SERVICE',
        description : 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.',
        author:'Dr. Cudi',
        authorImg : image,
        date : '23 April 2019'
    },
    {
        title : 'CAR A/C RECHARGE',
        description : 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.',
        author:'Dr. Sinthia',
        authorImg : image,
        date : '23 April 2019'
    },
    {
        title : 'PARKING SENSORS CALIBRATION',
        description : 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.',
        author:'Dr. Cudi',
        authorImg : image,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;