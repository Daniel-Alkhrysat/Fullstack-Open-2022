import { useState } from 'react'

const Button = ({text, handleClick}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Statistics = ({ good, neutral, bad }) => {
	if (good === 0 && neutral === 0 && bad === 0) {
		return "No feedback given"
	}
	else {
		return (
			<div>
				<div>Good: {good}</div>
				<div>Neutral: {neutral}</div>
				<div>Bad: {bad}</div>
				<div>All: {good+neutral+bad}</div>
				<div>Average: {(good-bad)/(good+neutral+bad)}</div>
				<div>Positive: {good/(good+neutral+bad)*100}%</div>
			</div>
		)
	}
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    	<h2>Give Feedback</h2>
    	<div>
    		<Button handleClick={() => setGood(good+1)} text="Good" />
    		<Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
    		<Button handleClick={() => setBad(bad+1)} text="Bad" />
    	</div>
    	<h2>Statistics</h2>
    	<div>
    		<Statistics good={good} neutral={neutral} bad={bad} />
    	</div>
    </div>
  )
}

export default App