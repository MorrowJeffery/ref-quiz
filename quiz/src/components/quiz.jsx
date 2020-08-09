import React from 'react';
import Count from './questionCount.jsx'
import Answers from './answerOption.jsx'
import Question from './question.jsx'

class Quiz extends React.Component {
  render() {

    const data1 = Object.values(this.props.data[this.props.k]['qa'])

    var qa1 = [];
    for (var j = 0; j < data1.length; j++) {
        qa1.push(<Count data2={data1} id={j}/>);
        qa1.push(<Question data2={data1} id={j}/>);
        qa1.push(<Answers data2={data1} id={j} name={'question'+j.toString()+'test'+this.props.k}/>);
    }

    return (
      <div>
      {qa1}
      </div>
    );
  }
}

export default Quiz;
