import React from 'react';
import Grade from './submitone.jsx'
//import $ from 'jquery';

class Answers extends React.Component {

  constructor(props) {
    super(props);
    this.handleShowOneAnsClick = this.handleShowOneAnsClick.bind(this);
    this.state = {isOneGraded: this.props.graded,
       isShowOneAnswer: false,
        isCorrect: false};
  }

  componentDidUpdate(prevProps) {
    if (this.props.graded !== prevProps.graded) {
      this.setState({isOneGraded: this.props.graded,
      isShowOneAnswer: false})

    }
  }

  handleAnswerClick(ind) {
    let userAnswer = ind;
    let correctAnswer = this.props.data1.correct;
    let isCorrect = userAnswer===correctAnswer;
    this.setState({ isCorrect: isCorrect});
  };

  handleShowOneAnsClick() {
    this.setState({isShowOneAnswer: true});
  }

  render() {
    const answers = this.props.data1.answers;
    const radioName = this.props.name;
    const listItems = answers.map((answer,ind) =>
    <div key={ind}>
    <ul className="answers">
    <li>
    <input type="radio"
    disabled={this.state.isOneGraded}
    name={radioName}
    id={ind}
    onClick={() => this.handleAnswerClick(ind)}/>
    <label>{answer}</label>
    </li>
    </ul>
    </div>
    );
    return (
      <div>
      {listItems}
      <Grade showanswerclick={this.handleShowOneAnsClick}
              showanswer={this.state.isShowOneAnswer}
              onegraded={this.state.isOneGraded}
              name={radioName}
              data2={this.props.data1}
              correct={this.state.isCorrect}/>
</div>

);}}
export default Answers;
