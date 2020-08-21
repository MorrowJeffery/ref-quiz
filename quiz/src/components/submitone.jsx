import React from 'react';
import $ from 'jquery';

class Grade extends React.Component {

  constructor(props) {
  super(props);
  this.handleGradeOneClick = this.handleGradeOneClick.bind(this);
  this.handleResetOneClick = this.handleResetOneClick.bind(this);
  this.handleShowOneAnsClick = this.handleShowOneAnsClick.bind(this);
  this.state = {isOneGraded: this.props.graded, isShowOneAnswer: false};
}

handleGradeOneClick() {
  this.setState({isOneGraded: true});
  $(`input[name=${this.props.name}]`).attr('disabled', 'disabled');

}

handleResetOneClick() {
  this.setState({isOneGraded: false, isShowOneAnswer:false});

    $(`input[name=${this.props.name}]`).removeAttr("disabled");
      $(`input[name=${this.props.name}]`).prop("checked", false);

}

handleShowOneAnsClick() {
  this.setState({isShowOneAnswer: true});
}

  render() {
        const isGraded = this.state.isOneGraded;
        const isShowAnswer = this.state.isShowOneAnswer;
        let ans = this.props.data2.correct
        let fullans = this.props.data2.answers[ans]

        if (isGraded) {
            if(isShowAnswer){
                return(
                  <div>
              <h6> {fullans} </h6>
              <button className="grade" onClick={this.handleResetOneClick}>
                Reset
              </button>
            </div>)
              }
              else{
                if(this.props.correct===true){
                  return(
                    <div>
                    <h6>Correct!</h6>
                <button className="grade" onClick={this.handleResetOneClick}>
                  Reset
                </button>
              </div>)

            }

            if(this.props.correct===false){
              return(
            <div>
            <h6>WRONG!</h6>
            <button className="grade" onClick={this.handleShowOneAnsClick}>
              Show Answer
            </button>

        <button className="grade" onClick={this.handleResetOneClick}>
          Reset
        </button>
      </div>)

    }}

                }

         else {
          return(
            <div>
              <button className="grade" onClick={this.handleGradeOneClick}>
                Grade
              </button>
              </div>
        )
        }
      }}



export default Grade;
