import React from 'react';

export default function Form(props) {
  const { values, update, submit, errorText } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h2 className='error'>{errorText}</h2>
      <div className='form-field'>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={values.name}
          placeholder='enter a name'
          onChange={onChange}
        />

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={values.email}
          placeholder='enter an email'
          onChange={onChange}
        />

        <label>Role:</label>
        <select name='role' value={values.role} onChange={onChange}>
          <option value=''>-- Select a Role --</option>
          <option value='Student'>Student</option>
          <option value='Team lead'>Team Lead</option>
          <option value='Instructor'>Instructor</option>
          <option value='Alumni'>Alumni</option>
        </select>
        <div className='submit'>
          <button type='submit'>Add Member</button>
        </div>
      </div>
    </form>
  );
}
