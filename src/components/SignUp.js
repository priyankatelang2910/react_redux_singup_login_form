import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../services/actions/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.newUsers);
  console.log(mystate);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !password) {
      return toast.warning("Please fill in all fields");
    }

    dispatch(signUp({ name, email, mobile, password }));

    toast.success(" SignUp Successfully ");
    navigate("/login");
  }


  return (

    <div className='container login-form'>

      <div className='row'>
        <h5 className='display-3 text-center my-5'>SignUp Textbook</h5>
        <div className='col-md-4 shadow students-form mx-auto '>
          <form onSubmit={handleSubmit}>
            <h6 className='text-center mb-3 '>Create a new account</h6>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='form-control mb-2'
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <input
                type='email'
                name='email'
                placeholder='Email address or phone number'
                className='form-control mb-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <input
                type='number'
                name='mobile'
                placeholder='Mobile Number'
                className='form-control mb-2'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)} />
              <input
                type='text'
                name='password'
                placeholder='Password'
                className='form-control mb-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />


              {/* <input type='submit' value="Sign Up" placeholder='name' className='btn button-1' onClick={() => dispatch(signUp())}></input> */}
              <input
                type='submit'
                value="Sign Up"
                className='btn button-1'
              />


            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default SignUp
