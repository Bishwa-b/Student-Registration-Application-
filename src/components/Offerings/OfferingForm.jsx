import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';
export default function OfferingForm() {
  const { courses, courseTypes, addOffering } = useContext(DataContext);
  const [courseId, setCourseId] = useState(''),
    [typeId, setTypeId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseId || !typeId) return;
    addOffering(courseId, typeId);
    setCourseId('');
    setTypeId('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <select
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
        required
      >
        <option value="">Select Type</option>
        {courseTypes.map((ct) => (
          <option key={ct.id} value={ct.id}>
            {ct.name}
          </option>
        ))}
      </select>
      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        required
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Offering</button>
    </form>
  );
}
