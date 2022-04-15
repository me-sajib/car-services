import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    return (
        <div className='bg-light py-5'>
            <div className="container">
                <div className="w-50 mx-auto">
                     <h1>Hi, <span className='text-primary'> Welcome Back</span></h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">Login</button>
                <p className='pt-4'>If your no account? <Link to="/register" className="text-primary">Create account now</Link></p>
                </form>
                <SocialLogin/>
                </div>
           
        </div>
        </div>
    );
};

export default SignIn;