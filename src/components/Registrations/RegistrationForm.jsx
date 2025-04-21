import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function RegistrationForm() {
  const { offerings, courses, courseTypes, addRegistration } =
    useContext(DataContext);
  const [offeringId, setOfferingId] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!offeringId || !studentName.trim()) return;
    addRegistration(offeringId, studentName.trim());
    setStudentName('');
    setOfferingId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={offeringId}
        onChange={(e) => setOfferingId(e.target.value)}
        required
      >
        <option value="">Select Offering</option>
        {offerings.map((o) => (
          <option key={o.id} value={o.id}>
            {courseTypes.find((ct) => ct.id === o.courseTypeId)?.name} –{' '}
            {courses.find((c) => c.id === o.courseId)?.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <button type="submit">Register Student</button>
    </form>
  );
}
