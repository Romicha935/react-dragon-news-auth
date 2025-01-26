import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { AuthContex } from '../../providers/AuthProvider'

const Register = () => {

    const {createUser} = useContext(AuthContex)
    const handleRegister = e => {
        e.preventDefault()
       
        console.log(e.currentTarget);
        
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password')
        console.log(form);
        console.log(name,photo,email,password);

        //createUser
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.error(error);
            
        })
        
      }
  return (
    <div>
    <Navbar/>
<div>
<h2 className='text-3xl my-10 text-center'>Please Register</h2>
<form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text"  placeholder="name" name='name' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text"  placeholder="photo url" name='photo url' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email"  placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p className='text-center mt-4'>Alrady have an account? <Link to='/login'>Login</Link></p>
</div>
</div>
  )
}

export default Register