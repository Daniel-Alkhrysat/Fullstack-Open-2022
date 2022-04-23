import { useState } from 'react'

const Button = ({text, handleClick}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Display = ({ text, value }) => {
	value = value || 0
	return <div>{text}: {value}</div>
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
    		<Display text="Good: " value={good} />
    		<Display text="Neutral: "value={neutral} />
    		<Display text="Bad: "value={bad} />
    		<Display text="All: "value={good+neutral+bad} />
    		<Display text="Average: "value={(good-bad)/(good+neutral+bad)} />
    		<Display text="Positive: "value={good/(good+neutral+bad)*100 + "%"} />
    	</div>
    </div>
  )
}

export default App