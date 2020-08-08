import React from 'react';
import Count from './questionCount.jsx';
import Question from './question.jsx';
import Answers from './answerOptions.jsx';
import QUESTION_U1 from '../store/USAH/level1.js';

class App extends React.Component {
  render() {
    const datafilter = QUESTION_U1
    return (
      <div className='wrapper'>
      <div className='quizz-header'>
      <Count data={datafilter}/>
      <Question data={datafilter}/>
      <Answers data={datafilter}/>
      </div>
      </div>
    );
  }
}

export default App;
