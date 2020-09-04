import React from 'react';
import Quizzes from '../components/Quizzes.js';
import H from '../components/headnav.jsx';
import LogAlert from '../components/alert.jsx'
import testFilter from './helpers/testFilter.jsx';

//https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api?rq=1

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.filterClick = this.filterClick.bind(this);
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isFiltered: false,
      user: '',
      isShowLogIn: true,
      newdata:testFilter('USA Hockey','1')
    };
  };

  handleChange(event) {
      this.setState({user: event.target.value});
    }

   handleLogInClick(event) {
     event.preventDefault();
     console.log(this.state.user);
     this.setState({isShowLogIn: false})
   }


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
      {this.state.isShowLogIn ?
        <LogAlert  show={this.state.isShowLogIn}
        showclick={this.handleLogInClick}
        user={this.handleChange}
        /> :
         <Quizzes datafilter={datafilter}/>
       }

</div>

    );
};}

export default Layout;
