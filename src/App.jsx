import React from 'react';
import './App.scss';
import { SumList } from './components/List/SumList';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const personList = [misha, olya, alex];

export const App = () => (
  <div className="App">
    <SumList personList={personList} />
  </div>
);
