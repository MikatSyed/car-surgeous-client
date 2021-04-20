import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,faList , faHome, faGripHorizontal,  faPlus,faCrown } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("email",loggedInUser);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch(`https://fast-mesa-06149.herokuapp.com/isAdmin?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            {isDoctor ? <div>

                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addservice" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faCrown} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Service</span>
                        </Link>
                    </li>
               
                 </div> : <div>
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
                 
               </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;