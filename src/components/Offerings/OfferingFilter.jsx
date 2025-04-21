import React,{useContext} from 'react';
import { DataContext } from '../../contexts/DataContext.jsx';
export default function OfferingFilter({ setFilterTypeId }) {
  const { courseTypes } = useContext(DataContext);
  return (
    <select onChange={(e) => setFilterTypeId(e.target.value)} defaultValue="">
      <option value="">All Types</option>
      {courseTypes.map((ct) => (
        <option key={ct.id} value={ct.id}>
          {ct.name}
        </option>
      ))}
    </select>
  );
}
