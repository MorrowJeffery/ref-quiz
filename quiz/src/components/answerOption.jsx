import React from 'react';
import Grade from './submitone.jsx'

class Answers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isCorrect: false};
  }

  handleAnswerClick(ind) {
    let userAnswer = ind;
    let correctAnswer = this.props.data2[this.props.id].correct;
    let isCorrect = userAnswer===correctAnswer;
    this.setState({ isCorrect: isCorrect });
  };

  render() {
    const answers = this.props.data2[this.props.id].answers;
    const radioName = this.props.name;
    const listItems = answers.map((answer,ind) =>
    <li>
    <input type="radio" name={radioName} id={ind} onClick={() => this.handleAnswerClick(ind)}/>
    <label>{answer}</label>
    </li>
    );
    return (
      <div>
      <ul className="answers">{listItems}</ul>
      <Grade st={this.props.st} data2={this.props.data1} correct={this.state.isCorrect}/>
</div>

);}}
export default Answers;
