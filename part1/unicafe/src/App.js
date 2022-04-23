import { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({ good, neutral, bad }) => {
	if (good === 0 && neutral === 0 && bad === 0) {
		return "No feedback given"
	}
	else {
		return (
			<div>
				<StatisticsLine text="Good: " value={good} />
				<StatisticsLine text="Neutral: " value={neutral} />
				<StatisticsLine text="Bad: " value={bad} />
				<StatisticsLine text="All: " value={good+neutral+bad} />
				<StatisticsLine text="Average: " value={(good-bad)/(good+neutral+bad)} />
				<StatisticsLine text="Positive: " value={good/(good+neutral+bad)*100 + "%"} />
			</div>
		)
	}
}
const StatisticsLine = ({ text, value }) => <div>{text} {value}</div>


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