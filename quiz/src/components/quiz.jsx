import React from 'react';
import Answers from './answerOption.jsx'
import Question from './question.jsx'
import GradeAll from './submitall.jsx'


class Quiz extends React.Component {
  render() {

    const data1 = Object.values(this.props.data[this.props.k]['qa'])

    var qa1 = [];

    //handle reset click here and pass into answers
    for (var j = 0; j < data1.length; j++) {
        qa1.push(<Question data2={data1} id={j}/>);
        qa1.push(
          <Answers
          graded={false}
          data1={data1[j]}
          name={'question'+j.toString()+'test'+this.props.k}/>);
    }

    return (
      <div>
      {qa1}
    <GradeAll graded={false}/>
      </div>
    );
  }
}

export default Quiz;
