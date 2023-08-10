import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const percentageOfGood = total !== 0 ? (good / total) * 100 : 0;

  return (

    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${percentageOfGood}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <table>
        <tbody>
          <h1>Give feedback</h1>
          <Button handleClick={() => setGood(good + 1)} text="Good" />
          <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
          <Button handleClick={() => setBad(bad + 1)} text="Bad" />

          {good + neutral + bad > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} />
          ) : (
            <p>No feedback given</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;