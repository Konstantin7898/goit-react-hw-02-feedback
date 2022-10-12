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
      <div>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {totalFeedback}</span>
        <span>Positive feedback: {positiveFeedbackPercentage || 0} %</span>
      </div>
    </div>
  );
};
