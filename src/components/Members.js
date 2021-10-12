import React from 'react';

export default function Members(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching team member&apos;s details...</h3>;
  }

  return (
    <div>
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
