import React from 'react';

class Answers extends React.Component {

  render() {
    const answers = this.props.data2[this.props.id].answers;
    const radioName = this.props.name;
    const listItems = answers.map((answer) =>
    <li>
    <input type="radio" name={radioName}/>
    <label>{answer}</label>
    </li>
    );
    return (
      <ul className="answers">{listItems}</ul>
);}}
export default Answers;
