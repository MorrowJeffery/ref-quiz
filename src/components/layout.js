import React from 'react';
import Quizzes from '../components/Quizzes.js';
import H from '../components/headnav.jsx';
import testFilter from './helpers/testFilter.jsx';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.filterClick = this.filterClick.bind(this);
    this.state = {
      isFiltered: false,
      newdata:testFilter('USA Hockey','1')
    };
  };

  filterClick(test, level) {
    console.log('testfilter',test)
    console.log('levelfilter',level)
    this.setState({
      isFiltered: true,
      newdata: testFilter(test,level)
    })
  }

  render() {
      const datafilter = this.state.newdata
    return (
      <div>
      <H fclick={this.filterClick}/>
    <Quizzes datafilter={datafilter}/></div>
    );
};}

export default Layout;
