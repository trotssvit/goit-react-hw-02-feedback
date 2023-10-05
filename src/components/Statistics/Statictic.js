import { Notification } from 'components/Notification';
import { Section } from 'components/SectionTitle/SectionTitle';
import propTypes from 'prop-types';

export const Statistic = ({ percentage, total, good, neutral, bad }) => {
  const count = good + neutral + bad;
  return (
    <Section title="Statistic">
      {count > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>TOTAL: {Number(total(good, neutral, bad))}</p>
          <p>
            Positive feedback: {Math.round(percentage(good, neutral, bad))}%
          </p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

Statistic.propTypes = {
  percentage: propTypes.func.isRequired,
  total: propTypes.func.isRequired,
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
};
