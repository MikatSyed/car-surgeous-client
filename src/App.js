import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../../../car-surgeous/car-surgeous-client/src/Component/Home/Home/Home';
import Login from '../../../car-surgeous/car-surgeous-client/src/Component/Login/Login/Login';
import React, { createContext, useState } from 'react';
import Deshboard from './Component/DashBoard/Deshboard/Deshboard';
import AddService from './Component/DashBoard/AddService/AddService';
import DeshboardService from './Component/DeshBoardService/DeshboardService/DeshboardService';
import Review from './Component/DeshBoardService/Review/Review';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import MakeAdmin from './Component/DashBoard/MakeAdmin/MakeAdmin';
import Book from './Component/DeshBoardService/Book/Book';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <PrivateRoute  path="/dashboard">
            <Deshboard/>
          </PrivateRoute>

        
          <PrivateRoute path="/serviceDashboard">
         <DeshboardService/>
          </PrivateRoute>




         

          
          <Route  path="/addservice">
            <AddService/>
          </Route>

          
          <Route  path="/review">
            <Review/>
          </Route>

          <Route  path="/book">
            <Book/>
          </Route>

          <Route  path="/makeAdmin">
            <MakeAdmin/>
          </Route>


         
          <Route  path="/login">
           <Login/>
          </Route>

      </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
