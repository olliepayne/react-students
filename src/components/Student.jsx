import React from 'react'
import Score from './Score'

const Student = (props) => {
  return (
    <div>
      {props.studentInfo.map((student, idx) =>
        <div key={idx}>
          <h4>{student.name}</h4>
          <p>{student.bio}</p>
          <Score scores={student.scores} />
        </div>
      )}
    </div>
  )
}

export default Student