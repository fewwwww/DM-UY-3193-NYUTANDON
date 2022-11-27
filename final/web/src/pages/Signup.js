import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SignupPage = () => {
  return (
    <div className='page'>
      <Header />
      <div className='content'>
        <h1>Signup</h1>
        <form className='UserForm'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button htmlFor='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
