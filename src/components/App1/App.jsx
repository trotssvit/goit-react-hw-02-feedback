import { Component } from 'react';
import { Container } from '../App/App.styled.js';
import { FeedbackOptions } from '../FeedbackNavigation/FeedbackNavigation.js';
import { GlobalStyle } from '../GlobalSyle.js';
import { Section } from '../SectionTitle/SectionTitle.js';
import { Statistic } from '../Statistics/Statictic.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, b, c) => {
    return (a / (a + b + c)) * 100;
  };

  addFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    const {
      state,
      capitalize,
      addFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            toUp={capitalize}
            options={Object.keys(this.state)}
            onLeaveFeedback={addFeedback}
          />

          <Statistic
            total={countTotalFeedback}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            percentage={countPositiveFeedbackPercentage}
          />
          <GlobalStyle />
        </Section>
      </Container>
    );
  }
}
