import React from 'react';
import { v4 } from 'uuid';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={v4()}>
          <button type="button" onClick={() => onBtnClick(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
