import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage = () => {
  return (
    <div className='page'>
      <Header />
      <div className='content'>
        <h1>Login</h1>
        <form className='UserForm'>
          <label htmlFor='userName'>Username</label>
          <input type='text' name='userName' />
          <label htmlFor='userPassword'>Password</label>
          <input type='text' name='userPassword' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
