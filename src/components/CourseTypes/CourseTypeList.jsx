import React, { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function CourseTypeList() {
  const { courseTypes, updateCourseType, deleteCourseType } =
    useContext(DataContext);
  const [editId, setEditId] = useState(null),
    [editName, setEditName] = useState('');
  return (
    <ul>
      {courseTypes.map((ct) => (
        <li key={ct.id}>
          {editId === ct.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button
                onClick={() => {
                  updateCourseType(ct.id, editName);
                  setEditId(null);
                }}
              >
                Save
              </button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{ct.name}</span>
              <button
                onClick={() => {
                  setEditId(ct.id);
                  setEditName(ct.name);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteCourseType(ct.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
