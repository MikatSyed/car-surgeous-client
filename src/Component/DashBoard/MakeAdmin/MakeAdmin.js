import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
 
    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Make Admin</h5>
                
            </div>
        </section>
    );
};

export default AddAdmin;