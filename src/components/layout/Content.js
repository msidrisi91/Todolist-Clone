import React from 'react';
import { Tasks } from '../Tasks';

import { Sidebar } from './Sidebar';

export const Content = (props) => {
  return (
    <>
      <Sidebar />
      <Tasks />
    </>
  );
};
