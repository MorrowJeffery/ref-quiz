import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Quizzes extends React.Component {

  render() {

    const datafilter = alltests
    var booklevels = [];
    for (var i1 = 0; i1 < datafilter.length; i1++) {

      const data = Object.values(datafilter[i1]['qa']);

      booklevels.push(
        <div key={datafilter[i1].id}>
          <h4 className='testheader'> {datafilter[i1].book} - Level {datafilter[i1].level} </h4>
          <Quiz id={datafilter[i1].id} data={data}/>
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
