import React from 'react';

class Answers extends React.Component {

  render() {
    const answers = this.props.data[0].answers;
    const listItems = answers.map((answer) =>
    <li>{answer}</li>
    );
    return (
      <ul className="answers">{listItems}</ul>
);}}
export default Answers;
