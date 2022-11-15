import React from 'react';

const CreateUserForm = () => {
  return (
    <form className='FormElement'>
      <label htmlFor="username">Username</label>
      <input type="text" name="username"/>
      <button htmlFor="submit">Submit</button>
    </form>
  );
}

export default CreateUserForm;
