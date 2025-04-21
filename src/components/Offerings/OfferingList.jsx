// import { React, useContext } from 'react';
// import { DataContext } from '../../contexts/DataContext.jsx';
// export default function OfferingList({ filterTypeId, onSelectOffering }) {
//   const { offerings, courses, courseTypes, deleteOffering } =
//     useContext(DataContext);
//   const list = offerings.filter(
//     (o) => !filterTypeId || o.courseTypeId === filterTypeId
//   );
//   console.log(list);
//   return (
//     <ul>
//       {list.map((o) => {
//         const course = courses.find((c) => c.id === o.courseId);
//         const type = courseTypes.find((ct) => ct.id === o.courseTypeId);
//         return (
//           <li key={o.id}>
//             {type?.name} – {course?.name}
//             <button onClick={() => deleteOffering(o.id)}>Delete</button>
//             <button onClick={() => onSelectOffering(o.id)}>
//               Show Students
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// import React, { useContext } from 'react';
// import { DataContext } from '../../contexts/DataContext.jsx';

// export default function OfferingList({ filterTypeId }) {
//   const {
//     offerings,
//     courses,
//     courseTypes,
//     registrations,
//     deleteOffering,
//     deleteRegistration,
//   } = useContext(DataContext);

//   // Filter offerings by type if a filter is applied
//   const list = offerings.filter(
//     (o) => !filterTypeId || o.courseTypeId === filterTypeId
//   );

//   return (
//     <ul>
//       {list.map((o) => {
//         const course = courses.find((c) => c.id === o.courseId);
//         const type = courseTypes.find((ct) => ct.id === o.courseTypeId);
//         const students = registrations.filter((r) => r.offeringId === o.id);

//         return (
//           <li key={o.id}>
//             <div
//               style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
//             >
//               <strong>
//                 {type?.name} – {course?.name}
//               </strong>
//               <button onClick={() => deleteOffering(o.id)}>
//                 Delete Offering
//               </button>
//             </div>

//             {/* Student registrations for this offering */}
//             {students.length > 0 ? (
//               <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
//                 {students.map((r) => (
//                   <li
//                     key={r.id}
//                     style={{
//                       display: 'flex',
//                       gap: '0.5rem',
//                       alignItems: 'center',
//                     }}
//                   >
//                     {r.studentName}
//                     <button onClick={() => deleteRegistration(r.id)}>
//                       Remove Student
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p style={{ marginLeft: '1.5rem', fontStyle: 'italic' }}>
//                 No students registered.
//               </p>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
import React, { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';

export default function OfferingList({ filterTypeId }) {
  const {
    offerings,
    courses,
    courseTypes,
    registrations,
    deleteOffering,
    deleteRegistration,
  } = useContext(DataContext);

  // track which offering IDs have their student list shown
  const [expandedOfferings, setExpandedOfferings] = useState(new Set());

  const toggleStudents = (offeringId) => {
    setExpandedOfferings((prev) => {
      const next = new Set(prev);
      if (next.has(offeringId)) next.delete(offeringId);
      else next.add(offeringId);
      return next;
    });
  };

  // Filter offerings by type if a filter is applied
  const list = offerings.filter(
    (o) => !filterTypeId || o.courseTypeId === filterTypeId
  );

  return (
    <ul>
      {list.map((o) => {
        const course = courses.find((c) => c.id === o.courseId);
        const type = courseTypes.find((ct) => ct.id === o.courseTypeId);
        const students = registrations.filter((r) => r.offeringId === o.id);
        const isExpanded = expandedOfferings.has(o.id);

        return (
          <li key={o.id} style={{ marginBottom: '1rem' }}>
            <div
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
            >
              <strong>
                {type?.name} – {course?.name}
              </strong>
              <button onClick={() => deleteOffering(o.id)}>
                Delete Offering
              </button>
              <button onClick={() => toggleStudents(o.id)}>
                {isExpanded ? 'Hide Students' : 'Show Students'}
              </button>
            </div>

            {/* Conditionally render the students list */}
            {isExpanded && (
              <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                {students.length > 0 ? (
                  <ul>
                    {students.map((r) => (
                      <li
                        key={r.id}
                        style={{
                          display: 'flex',
                          gap: '0.5rem',
                          alignItems: 'center',
                        }}
                      >
                        {r.studentName}
                        <button onClick={() => deleteRegistration(r.id)}>
                          Remove Student
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontStyle: 'italic' }}>No students registered.</p>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
