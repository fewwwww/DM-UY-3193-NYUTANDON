import React from 'react';

const LoginForm = () => {
  return (
    <form className='FormElement'>
      <label htmlFor="userName">Username</label>
      <input type="text" name="userName"/>
      <label htmlFor="userPassword">Password</label>
      <input type="text" name="userPassword"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
