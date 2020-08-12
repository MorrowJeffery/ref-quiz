import React from 'react';

class Answers extends React.Component {
  handleAnswerClick(ind) {
    let userAnswer = ind;
    let correctAnswer = this.props.data2[this.props.id].correct;
    let isCorrect = userAnswer===correctAnswer;
    console.log('isCorrect',isCorrect);
    return(isCorrect)
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
      <ul className="answers">{listItems}</ul>
);}}
export default Answers;
