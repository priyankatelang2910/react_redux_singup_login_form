import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../services/actions/actions';

import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allusers = useSelector((state) => state.newUsers.allusers);

  console.log("allusers", allusers);


  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      toast.warning("Please fill in all fields");
      return;
    }
    const user = allusers.find(user => user.mobile === mobile && user.password === password);
    console.log('Found User:', user);

    if (user) {
      dispatch(logIn(user));


      toast.success(" Login Successfully ");
      setTimeout(() => {

        navigate("/page1");
      }, 1000);
    } else {
      toast.error("Invalid mobile or password");
      return;

    }



  }

  return (
    <div className='container login-form'>
      <div className='row'>
        <h5 className='display-3 text-center my-5'>Textbook</h5>
        <div className='col-md-4 shadow students-form mx-auto '>
          <form onSubmit={handleSubmit}>
            <h6 className='text-center mb-3 '>Login in to Textbook</h6>
            <div className='form-group'>
              <input
                type='text'
                name='mobile'
                placeholder='Mobile Number'
                className='form-control mb-2'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)} />
              {/* <input
                type='text'
                name='name'
                placeholder='Name'
                className='form-control mb-2'
                value={name}
                onChange={(e) => setName(e.target.value)} /> */}
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='form-control mb-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" />


              <input type='submit' value="Login" placeholder='name' className='btn button-1  '></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
