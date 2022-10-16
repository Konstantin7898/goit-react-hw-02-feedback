import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { FeedbackList } from '../Feedback/Feedback.styled';
import { Button } from '../Feedback/Feedback.styled';
export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={v4()}>
          <Button>
            <button type="button" onClick={() => onBtnClick(option)}>
              {option}
            </button>
          </Button>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onBtnClick: PropTypes.func.isRequired,
};
