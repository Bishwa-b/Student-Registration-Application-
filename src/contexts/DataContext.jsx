import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const addCourseType = (name) =>
    setCourseTypes([...courseTypes, { id: uuidv4(), name }]);
  const updateCourseType = (id, name) =>
    setCourseTypes(
      courseTypes.map((ct) => (ct.id === id ? { ...ct, name } : ct))
    );
  const deleteCourseType = (id) =>
    setCourseTypes(courseTypes.filter((ct) => ct.id !== id));

  const addCourse = (name) => setCourses([...courses, { id: uuidv4(), name }]);
  const updateCourse = (id, name) =>
    setCourses(courses.map((c) => (c.id === id ? { ...c, name } : c)));
  const deleteCourse = (id) => setCourses(courses.filter((c) => c.id !== id));

  const addOffering = (courseId, courseTypeId) =>
    setOfferings([...offerings, { id: uuidv4(), courseId, courseTypeId }]);
  const deleteOffering = (id) =>
    setOfferings(offerings.filter((o) => o.id !== id));

  const addRegistration = (offeringId, studentName) =>
    setRegistrations([
      ...registrations,
      { id: uuidv4(), offeringId, studentName },
    ]);
  const deleteRegistration = (id) =>
    setRegistrations(registrations.filter((r) => r.id !== id));

  return (
    <DataContext.Provider
      value={{
        courseTypes,
        addCourseType,
        updateCourseType,
        deleteCourseType,
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        offerings,
        addOffering,
        deleteOffering,
        registrations,
        addRegistration,
        deleteRegistration,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
