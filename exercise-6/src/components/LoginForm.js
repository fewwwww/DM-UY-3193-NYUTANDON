import React from 'react';

const LoginForm = ({ loginUser }) => {
  return (
    <form className='FormElement' onSubmit={(e) => loginUser(e)}>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' />
      <label htmlFor='password'>Password</label>
      <input type='text' name='password' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoginForm;
