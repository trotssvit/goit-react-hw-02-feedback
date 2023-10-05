import propTypes from 'prop-types';
import { Button } from './FeedbackNavigation.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            onClick={() => onLeaveFeedback(option)}
            type="button"
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};
