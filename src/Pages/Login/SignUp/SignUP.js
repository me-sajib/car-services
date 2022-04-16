import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';

const SignUP = () => {
      const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);
    const createAccount = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUserWithEmailAndPassword(email, password,{sendEmailVerification: true})
    }
     if(user){
        console.log(user)
    }
    if(error){
        console.log(error)
    }
    
    return (
        <div className='bg-light py-5'>
            <div className="container">
                <div className="w-50 mx-auto">
                     <h1>Hi, <span className='text-primary'> Create your account    </span></h1>
                    <form onSubmit={createAccount}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
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