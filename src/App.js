import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe('pk_test_51MPWqvDy80iXHFhz5yeHxGm9FrQtYq34uWgBG5OzJTkM2dfl4tdvWhE97mZUFIwc6QyGkQ5mylkKCIcLZLPb3NZD00czJqjfGL');


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //this code will only run once when the app component loads
    //kind of like a dynamic if statement in react
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ',authUser);
      if(authUser){
        //the user just logged in or the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={[<Header/>,<Home/>]}/>
          <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
          <Route path='/login' element={[<Login/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe ={promise}><Payment/></Elements>]}/>
          <Route path="/orders" element={[<Header/>, <Orders/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
