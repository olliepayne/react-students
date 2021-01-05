import React from 'react'

const Score = (props) => {
  return (
    <div>
      <ul>
        {props.scores.map((scoreData) => 
          <li>
            Test Score Received: {scoreData.date}, Score: {scoreData.score}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Score