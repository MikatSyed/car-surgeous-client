import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceSidebar from '../ServiceSidebar/ServiceSidebar';



// import axios from 'axios'

const BookList = () => {
    
    const{id}= useParams();
    const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    const[checkout,setCheckout] = useState([]);
   
     useEffect(()=>{
        // axios.get(`https://arcane-atoll-67843.herokuapp.com/events/${productId}`).then(res => {
        //     setCheckout(res.data)
        //     console.log(checkout)
        // fetch(`https://fast-mesa-06149.herokuapp.com/events/${id}`)
        fetch(`https://fast-mesa-06149.herokuapp.com/events/${id}`)

        .then(res=> res.json())
        .then(data => {
           setCheckout(data)
           
        })

        // })
    },[])
    return (

        <section className="container-fluid row">
        <ServiceSidebar/>
           <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
               <h5 className="text-primary">BookList</h5>
  

        <div>
         
          
       {
            checkout.map(pb =><table  style={{width:'50%',borderCollapse:'collapse'}}>
            <tr>
              <th style={{border:'2px solid green'}}>Service</th>
              <th style={{border:'2px solid green'}}>Description</th>
             
            </tr>
            <tr>
              <td style={{border:'2px solid green'}}>{pb.name}</td>
              <td style={{border:'2px solid green'}}>{pb.description}</td>
          
            </tr>
           
          </table>
            )}
          
          
        </div>
        </div>
        </section>
    );
};

export default BookList;