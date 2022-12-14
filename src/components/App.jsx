import { Statistics } from './Statistics/Statistics';
import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notification/Notificatio';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    console.log(
      typeof this.state.good,
      typeof this.state.bad,
      typeof this.state.neutral
    );
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countPositiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100
    );

    return countPositiveFeedback;
  };

  // style={{
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: 40,
  //   color: '#010101',
  // }}
  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.positiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave a feedback</h1>
        <FeedbackOptions options={options} onBtnClick={this.onLeaveFeedback} />
        {totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
