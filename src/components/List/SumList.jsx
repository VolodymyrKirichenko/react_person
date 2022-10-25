import React from 'react';
import { Person } from '../Person/Person';
import './SumList.scss';

export const SumList = (props) => {
  const { personList } = props;

  return (
    <div className="list">
      {personList.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};
