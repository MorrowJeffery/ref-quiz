import React from 'react';
import Quiz from './quiz.jsx'
import QUESTION_U1 from '../store/USAH/level1.js';

class App extends React.Component {
  render() {

    const datafilter = QUESTION_U1


    return (
      <div className='wrapper'>
      <div className='quiz-header'>
      <Quiz data={datafilter} k={0}/>
      </div>
      </div>
    );
  }
}

export default App;
