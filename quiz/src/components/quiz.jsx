import React from 'react';
import Answers from './answerOption.jsx'
import Question from './question.jsx'
import GradeAll from './submitall.jsx'
//import $ from 'jquery';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.handleGradeAllClick = this.handleGradeAllClick.bind(this);
    this.handleResetAllClick = this.handleResetAllClick.bind(this);
    this.state = {isAllGraded: false,
      quizorder:[],
      numcorrect: 0};
  }

  handleGradeAllClick() {
    this.setState({isAllGraded: true});

  }

  handleResetAllClick() {
    this.setState({isAllGraded: false});
    //$(`input[name$=test${this.props.k}]`).prop("checked", false);
  }

  render() {
    var qa1 = [];
    let {data} = this.props
    let {numcorrect}= this.state
    let totalquestions = data.length
    let score = 0
    if(totalquestions>0){
     score =  numcorrect/totalquestions}
     qa1.push(<h5 key={data.id}>
       Score: {numcorrect}/{totalquestions} = {score}%</h5>);
    for (var r = 0; r < data.length; r++) {
      let j= this.props.shuffleques[r]


      const allanswers =
            data[j].incorrectanswers ? data[j].incorrectanswers.concat(data[j].correctanswer) : [];
      var lenanswers = Array.from(Array(allanswers.length).keys())
      var shuffleanswers = this.props.shufflefun(lenanswers)

        qa1.push(<Question data2={data} id={j} key={j} num={r}/>);
        qa1.push(
          <Answers
          graded={this.state.isAllGraded}
          data1={data[j]}
          answers={allanswers}
          shuffleanswers = {shuffleanswers}
          name={'question'+r.toString()+'test'+this.props.shuffleques}
          key={'question'+r.toString()+'test'+this.props.shuffleques}
          />);
    }
    return (
      <div>
      {qa1}
    <GradeAll graded={this.state.isAllGraded} test={this.props.k} gradeallclick={this.handleGradeAllClick}
     resetallclick={this.handleResetAllClick}/>
      </div>
    );
  }
}

export default Quiz;
