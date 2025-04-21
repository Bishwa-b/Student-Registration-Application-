import React, { useState } from 'react';
import CourseTypeForm from './components/CourseTypes/CourseTypeForm.jsx';
import CourseTypeList from './components/CourseTypes/CourseTypeList.jsx';
import CourseForm from './components/Courses/CourseForm.jsx';
import CourseList from './components/Courses/CourseList.jsx';
import OfferingFilter from './components/Offerings/OfferingFilter.jsx';
import OfferingForm from './components/Offerings/OfferingForm.jsx';
import OfferingList from './components/Offerings/OfferingList.jsx';
import RegistrationForm from './components/Registrations/RegistrationForm.jsx';
import RegistrationList from './components/Registrations/RegistrationList.jsx';

const TABS = ['Course Types', 'Courses', 'Offerings', 'Registrations'];

export default function App() {
  const [activeTab, setActiveTab] = useState('Course Types');
  const [filterTypeId, setFilterTypeId] = useState('');
  const [showRegsFor, setShowRegsFor] = useState('');

  return (
    <div className="container">
      <nav className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <main>
        {activeTab === 'Course Types' && (
          <>
            <CourseTypeForm />
            <CourseTypeList />
          </>
        )}
        {activeTab === 'Courses' && (
          <>
            <CourseForm />
            <CourseList />
          </>
        )}
        {activeTab === 'Offerings' && (
          <>
            <OfferingFilter setFilterTypeId={setFilterTypeId} />
            <OfferingForm />
            <OfferingList
              filterTypeId={filterTypeId}
              onSelectOffering={setShowRegsFor}
            />
          </>
        )}
        {activeTab === 'Registrations' && (
          <>
            <RegistrationForm />
            {showRegsFor && <RegistrationList offeringId={showRegsFor} />}
          </>
        )}
      </main>
    </div>
  );
}
