import React, { useState } from 'react';
import Members from './Members';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [errorText, setErrorText] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name,
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrorText('Please enter in all the fields!');
      return;
    }
    setTeamMembers([newMember, ...teamMembers]);
    setFormValues(initialFormValues);
    setErrorText('');
  };

  return (
    <div className='App'>
      <h1>Team Builder App</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />
      <div className='container'>
        <h2 className='team-title'>Team</h2>
        {teamMembers.map((elem, idx) => {
          return <Members key={idx} details={elem} />;
        })}
      </div>
    </div>
  );
}

export default App;
