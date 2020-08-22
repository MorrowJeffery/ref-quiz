import React from 'react';

class Grade extends React.Component {

  render() {
        const isGraded = this.props.onegraded;
        const isShowAnswer = this.props.showanswer;
        let ans = this.props.data2.correct;
        let fullans = this.props.data2.answers[ans];

        if (isGraded===true) {

            if(isShowAnswer===true){
                return(
                  <div>
              <h6> {fullans} </h6>
              <button className="grade" onClick={this.props.resetclick}>
                Reset
              </button>
            </div>)
              }
              if(isShowAnswer!==true){
                if(this.props.correct===true){

                  return(
                    <div>
                    <h6>Correct!</h6>
                <button className="grade" onClick={this.props.resetclick}>
                  Reset
                </button>
              </div>)

            }

            if(this.props.correct===false){
              return(
            <div>
            <h6>WRONG!</h6>
            <button className="grade" onClick={this.props.showanswerclick}>
              Show Answer
            </button>

        <button className="grade" onClick={this.props.resetclick}>
          Reset
        </button>
      </div>)

    }}

                }

         if (isGraded!==true) {
          return(
            <div>
              <button className="grade" onClick={this.props.gradeclick}>
                Grade
              </button>
              </div>
        )
        }
      }}



export default Grade;
