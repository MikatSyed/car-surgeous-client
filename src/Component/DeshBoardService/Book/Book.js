import React from 'react';
import ServiceSidebar from '../ServiceSidebar/ServiceSidebar';

const Book = () => {
    return (
        
           <section className="container-fluid row">
      <ServiceSidebar/>
         <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
             <h5 className="text-primary">Add Book</h5>
        </div>
        </section>
    );
};

export default Book;