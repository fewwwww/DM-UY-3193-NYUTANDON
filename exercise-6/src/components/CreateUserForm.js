import React from 'react';

const CreateUserForm = ({ signUpUser }) => {
  return (
    <form className='FormElement' onSubmit={(e) => signUpUser(e)}>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' />
      <button htmlFor='submit'>Submit</button>
    </form>
  );
};

export default CreateUserForm;
