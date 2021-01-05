import React from 'react'
import Score from './Score'

const Student = (props) => {
  return (
    <div>
      <h4>{props.studentInfo.name}</h4>
      <p>{props.studentInfo.bio}</p>
      <Score scores={props.studentInfo.scores} />
    </div>
  )
}

export default Student