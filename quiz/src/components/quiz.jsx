import React from 'react';
import Answers from './answerOption.jsx'
import Question from './question.jsx'
import GradeAll from './submitall.jsx'
import $ from 'jquery';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.handleGradeAllClick = this.handleGradeAllClick.bind(this);
    this.handleResetAllClick = this.handleResetAllClick.bind(this);
    this.state = {isAllGraded: false};
  }

  handleGradeAllClick() {
    this.setState({isAllGraded: true});
  }

  handleResetAllClick() {
    this.setState({isAllGraded: false});
    $(`input[name$=test${this.props.k}]`).prop("checked", false);
  }


  render() {

    const data1 = Object.values(this.props.data[this.props.k]['qa'])

    var qa1 = [];

    //handle reset click here and pass into answers
    for (var j = 0; j < data1.length; j++) {
        qa1.push(<Question data2={data1} id={j}/>);
        qa1.push(
          <Answers
          graded={this.state.isAllGraded}
          data1={data1[j]}
          name={'question'+j.toString()+'test'+this.props.k}/>);
    }

    return (
      <div>
      {qa1}
    <GradeAll graded={this.state.isAllGraded} test={this.props.k} gradeallclick={this.handleGradeAllClick}
     resetallclick={this.handleResetAllClick}/>
      </div>
    );
  }
}

export default Quiz;
