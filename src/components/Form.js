import React from 'react';

export default function Form(props) {
  const { values, update, submit } = props;

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
      <div className='form-field'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={values.name}
          placeholder='enter a name'
          onChange={onChange}
        />

        <label>Email</label>
        <input
          type='email'
          name='email'
          value={values.email}
          placeholder='enter an email'
          onChange={onChange}
        />

        <label>Role</label>
        <select name='role' value={values.role} onChange={onChange}>
          <option value=''>-- Select a Role --</option>
          <option value='student'>Student</option>
          <option value='team lead'>Team Lead</option>
          <option value='instructor'>Instructor</option>
          <option value='alumni'>Alumni</option>
        </select>
        <div className='submit'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
}
