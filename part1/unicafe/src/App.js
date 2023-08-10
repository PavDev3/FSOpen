import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;

  const average = (good - bad) / 3;

  const porcent = total !== 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>give feeback</h1>
      <button onClick={() => {
        setGood(good + 1)
      }}>Good</button>

      <button onClick={() => {
        setNeutral(neutral + 1)
      }}>Neutral</button>

      <button onClick={() => {
        setBad(bad + 1)
      }}>Bad</button>

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average} </p>
      <p>Positive: {porcent}</p>
    </div>
  );
};

export default App