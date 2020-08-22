import React from 'react';

class GradeAll extends React.Component {

  render() {
        const isGraded = this.props.graded;
        if (isGraded===true) {
            return(
              <button className="grade" onClick={this.props.resetallclick}>
                Reset Test
              </button>)
              }
         if (isGraded!==true) {
          return(
              <button className="grade" onClick={this.props.gradeallclick}>
                Grade Test
              </button>
        )
        }
      }}

export default GradeAll;
