import React, { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function CourseList() {
  const { courses, updateCourse, deleteCourse } = useContext(DataContext);
  const [editId, setEditId] = useState(null),
    [editName, setEditName] = useState('');
  return (
    <ul>
      {courses.map((c) => (
        <li key={c.id}>
          {editId === c.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button
                onClick={() => {
                  updateCourse(c.id, editName);
                  setEditId(null);
                }}
              >
                Save
              </button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{c.name}</span>
              <button
                onClick={() => {
                  setEditId(c.id);
                  setEditName(c.name);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteCourse(c.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
