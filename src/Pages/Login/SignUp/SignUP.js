import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUP = () => {
    return (
        <div className='bg-light py-5'>
            <div className="container">
                <div className="w-50 mx-auto">
                     <h1>Hi, <span className='text-primary'> Create your account    </span></h1>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" className="btn btn-primary d-block w-100">Submit</button>
                </form>
                <p className='pt-4'>Already an account? <Link to="/login" className="text-primary">login now</Link></p>
                <SocialLogin/>
                </div>
           
        </div>
        </div>
    );
};

export default SignUP;