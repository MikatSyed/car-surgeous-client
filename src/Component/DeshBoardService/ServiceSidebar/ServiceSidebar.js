import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,faList , faHome, faGripHorizontal,faFill,faPlus,faCrown,faListAlt,faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const ServiceSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/book" className="text-white">
                            <FontAwesomeIcon icon={faFill} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/booklist/:id" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Booklist</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faStreetView} /> <span>Review</span>
                        </Link>
                    </li>
                    
                   
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default ServiceSidebar;