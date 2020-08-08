import React from 'react';
import Count from './questionCount.jsx'
import Answers from './answerOption.jsx'
import Question from './question.jsx'


import QUESTION_U1 from '../store/USAH/level1.js';

class Quiz extends React.Component {
  render() {
    const data1 = this.props.data
    const k1 = this.props.k

    return (
      <div>
      <Count data2={data1} id={k1}/>
      <Question data2={data1} id={k1}/>
      <Answers data2={data1} id={k1}/>
      </div>
    );
  }
}

export default Quiz;
