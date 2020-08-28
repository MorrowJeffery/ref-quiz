import React from 'react';
import Grade from './submitone.jsx'
//import $ from 'jquery';

class Answers extends React.Component {

  constructor(props) {
    super(props);
    this.handleShowOneAnsClick = this.handleShowOneAnsClick.bind(this);

    this.state = {isOneGraded: this.props.graded,
       isShowOneAnswer: false,
       counter:0,
        isCorrect: false};
  }

  componentDidUpdate(prevProps) {
    if (this.props.graded !== prevProps.graded) {
      this.setState({isOneGraded: this.props.graded,
      isShowOneAnswer: false
    })

    }
  }

  handleAnswerClick(answer,isgrade) {
    let userAnswer = answer;
    let correctAnswer = this.props.data1.correctanswer;
    let isCorrect = userAnswer===correctAnswer;
    this.setState({ isCorrect: isCorrect});
    console.log('ig',isgrade)


    if(isCorrect===true && isgrade===true){
      this.setState({ counter: this.state.counter+1},
        () => {
  console.log(this.state.counter, 'counter');}

      );
    }

    if(isCorrect!==true && isgrade===true){
      this.setState({ counter: this.state.counter-1},
        () => {
  console.log(this.state.counter, 'counter');}


      );
    }

  };

  handleShowOneAnsClick() {
    this.setState({isShowOneAnswer: true});
  }




  render() {
    var a1 = [];
    const answers = this.props.answers
    const radioName = this.props.name;

    for (var q = 0; q < answers.length; q++) {
      let a= answers[this.props.shuffleanswers[q]];
      a1.push(
        <div key={a}>
        <ul className="answers">
        <li>

        <input type="radio"
        disabled={this.state.isOneGraded}
        name={radioName}
        id={a}
        onClick={()=> this.handleAnswerClick(a,this.state.isOneGraded)}
        />
        <label>{a}</label>
        </li>
        </ul>
       </div>);}

    return (
      <div>
      {a1}
      <Grade showanswerclick={this.handleShowOneAnsClick}
              showanswer={this.state.isShowOneAnswer}
              onegraded={this.state.isOneGraded}
              name={radioName}
              data2={this.props.data1}
              correct={this.state.isCorrect}/>
</div>

);}}
export default Answers;
