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
          <option value=''>---- Select a Role ----</option>
          <option value='Project Manager'>Project Manager</option>
          <option value='Product Lead'>Product Owner</option>
          <option value='Team Lead'>Team Lead</option>
          <option value='Tech Lead'>Tech Lead</option>
          <option value='Full-Stack Developer'>Full-Stack Developer</option>
          <option value='Back-End Developer'>Back-End Developer</option>
          <option value='Front-End Developer'>Front-End Developer</option>
          <option value='QA Lead'>QA Lead</option>
          <option value='QA Engineer'>QA Engineer</option>
          <option value='UI Designer'>UI Designer</option>
          <option value='UX Designer'>UX Designer</option>
        </select>
        <div className='submit'>
          <button type='submit'>Add Member</button>
        </div>
      </div>
    </form>
  );
}
