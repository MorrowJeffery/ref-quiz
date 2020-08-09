import React from 'react';
import Quiz from './quiz.jsx'
import alltests from '../store/all.js';

class App extends React.Component {
  render() {
    const datafilter = alltests
    console.log('all',alltests)

    var booklevels = [];
    for (var i = 0; i < datafilter.length; i++) {
        booklevels.push(<Quiz data={datafilter} k={i}/>);
    }
    console.log('bl',booklevels)


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
