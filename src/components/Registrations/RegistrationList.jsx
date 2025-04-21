import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function RegistrationList({ offeringId }) {
  const { registrations, deleteRegistration } = useContext(DataContext);
  const list = registrations.filter((r) => r.offeringId === offeringId);

  return (
    <ul>
      {list.map((r) => (
        <li key={r.id}>
          {r.studentName}
          <button onClick={() => deleteRegistration(r.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
