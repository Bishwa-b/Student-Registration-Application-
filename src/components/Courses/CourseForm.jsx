import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function CourseForm() {
  const [name, setName] = useState('');
  const { addCourse } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCourse(name.trim());
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Course"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
}
