import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';

class Quizzes extends React.Component {
  render() {
    const datafilter = alltests
    var booklevels = [];
    for (var i = 0; i < datafilter.length; i++) {
      booklevels.push(
        <div key={datafilter[i].id}>
          <h4> {datafilter[i].book} - Level {datafilter[i].level} </h4>
          <Quiz data={datafilter} k={i}/>
        </div>);
      }
    return (
      <div className='quiz-header'>
      {booklevels}
      </div>

    );
  }
}

export default Quizzes;
