import React from 'react';

class Grade extends React.Component {

  constructor(props) {
  super(props);
  this.handleGradeClick = this.handleGradeClick.bind(this);
  this.handleResetClick = this.handleResetClick.bind(this);
  this.handleShowAnsClick = this.handleShowAnsClick.bind(this);
  this.state = {isGraded: this.props.st, isAnswer: false};
}

handleGradeClick() {
  this.setState({isGraded: true});
}

handleResetClick() {
  this.setState({isGraded: false, isAnswer:false});
}

handleShowAnsClick() {
  this.setState({isAnswer: true});
}

  render() {
        const isGraded = this.state.isGraded;
        const isAnswer = this.state.isAnswer;
        let ans = this.props.data2.correct
        let fullans = this.props.data2.answers[ans]

        if (isGraded) {
            if(isAnswer){
                return(
                  <div>
              <h6> {fullans} </h6>
              <button className="grade" onClick={this.handleResetClick}>
                Reset
              </button>
            </div>)
              }
              else{
                if(this.props.correct===true){
                  return(
                    <div>
                    <h6>Correct!</h6>
                <button className="grade" onClick={this.handleResetClick}>
                  Reset
                </button>
              </div>)

            }

            if(this.props.correct===false){
              return(
            <div>
            <h6>WRONG!</h6>
            <button className="grade" onClick={this.handleShowAnsClick}>
              Show Answer
            </button>

        <button className="grade" onClick={this.handleResetClick}>
          Reset
        </button>
      </div>)

    }}

                }

         else {
          return(
            <div>
              <button className="grade" onClick={this.handleGradeClick}>
                Grade
              </button>
              </div>
        )
        }
      }}



export default Grade;
