import React, { useEffect, useState } from 'react';
import Admins from '../Admins/Admins';



const Admin = () => {
    const [admin,setAdmin] = useState([]);
useEffect(()=> {
    // fetch('https://fast-mesa-06149.herokuapp.com/events')
    fetch('https://fast-mesa-06149.herokuapp.com/events')
    .then(res => res.json())
    .then(data =>setAdmin(data))
},[])
    return (
        <section>

<h2 className="text-center">Our Admin</h2>  

        <div className="d-flex justify-content-center">
          <div className="row w-75 mt-5 pt-5">
         
            
           {
               admin.map(adminData => <Admins adminData={adminData}/>)
             
           }

          </div>
       </div>

        </section>
    );
};

export default Admin;