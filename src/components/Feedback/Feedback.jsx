import { useState } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;
  const percentage = ((good / total) * 100).toFixed(0);

  const handleIncrementFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('choose the option');
        break;
    }
  };

  return (
    <div className={css.feedbackWrapper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleIncrementFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
        {total === 0 && <Notification message={'There is no feedback'} />}
      </Section>
    </div>
  );
};
