import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';

class App extends React.Component {
  render() {
    const datafilter = alltests
    var booklevels = [];
    for (var i = 0; i < datafilter.length; i++) {
        booklevels.push(<h4> {datafilter[i].id} - Level {datafilter[i].level} </h4>);
        booklevels.push(<Quiz data={datafilter} k={i}/>);
    }
    return (
      <div className='wrapper'>
      <div className='quiz-header'>
      {booklevels}
      </div>
      </div>
    );
  }
}

export default App;
