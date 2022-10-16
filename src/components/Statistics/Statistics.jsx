import { StatisticsItem, StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positiveFeedbackPercentage || 0} %
        </StatisticsItem>
      </StatisticsList>
    </div>
  );
};
