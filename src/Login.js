import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const signIn = e => {
        e.preventDefault(); //This prevents the page to refresh. we do not want refresh in react

        //Fancy Firebase code

  }

  const register = e =>{
    e.preventDefault();

    //Fancy Firebase register code
  }
  
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'/>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' className='sign_in_button' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Interest Based Ads Notices.
            </p>

            <button className='register__button' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login