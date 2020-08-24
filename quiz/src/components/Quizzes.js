import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Quizzes extends React.Component {

  createRandom(arr, namestate) {
  let myArr = [...arr];
  let randomizedArr = [];
  while (myArr.length > 0) {
    var randomIndex = Math.floor(Math.random() * myArr.length);
    randomizedArr.push(myArr[randomIndex]);
    myArr.splice(randomIndex, 1);
  }
  return randomizedArr;
}


  render() {


    const datafilter = alltests
    var booklevels = [];
    for (var i = 0; i < datafilter.length; i++) {

      const data = Object.values(datafilter[i]['qa'])
      var lenquestions = Array.from(Array(data.length).keys())
      var shufflequestions = this.createRandom(lenquestions)


      booklevels.push(
        <div key={datafilter[i].id}>
          <h4> {datafilter[i].book} - Level {datafilter[i].level} </h4>
          <Quiz data={data} shuffleques={shufflequestions} shufflefun={this.createRandom}/>
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
