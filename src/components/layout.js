import React from 'react';
import Quizzes from '../components/Quizzes.js';
import H from '../components/headnav.jsx';
import alltests from '../store/all.js';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Layout extends React.Component {

  render() {
      const datafilter = alltests
    return (
      <div>
      <H/>
    <Quizzes datafilter={datafilter}/></div>
    );
};}

export default Layout;
