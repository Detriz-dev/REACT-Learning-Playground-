

import React from 'react';

export interface StackListProps {
  name: string;
  surname: string;
}

export const Stacklist: React.FC<StackListProps> = ({ name, surname }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{surname}</p>
    </div>
  );
};

