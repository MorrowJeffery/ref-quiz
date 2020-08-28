import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';
import createRandom from './helpers.jsx';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Quizzes extends React.Component {

  render() {

    const datafilter = alltests
    var booklevels = [];
    for (var i = 0; i < datafilter.length; i++) {

      const data = Object.values(datafilter[i]['qa'])
      var lenquestions = Array.from(Array(data.length).keys())
      var shufflequestions = createRandom(lenquestions)

      booklevels.push(
        <div key={datafilter[i].id}>
          <h4> {datafilter[i].book} - Level {datafilter[i].level} </h4>
          <Quiz id={datafilter[i].id} data={data} shuffleques={shufflequestions}/>
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
