import { Statistic } from 'components/Statistics/Statictic';
import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackNavigation/FeedbackNavigation';
import { GlobalStyle } from '../GlobalSyle';
import { Section } from '../SectionTitle/SectionTitle';
import { Container } from './App.styled';

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
