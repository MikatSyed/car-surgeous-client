import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment';



const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
       
        <div>
            <div className="text-center bg-light text-success">
             <h3>Name:{loggedInUser.name}</h3>
            <h4>Email:{loggedInUser.email}</h4>
            </div>
            <ProcessPayment/>
            
        </div>
    );
};

export default Book;