import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function CourseTypeForm() {
  const [name, setName] = useState('');
  const { addCourseType } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCourseType(name.trim());
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Course Type"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Type</button>
    </form>
  );
}
