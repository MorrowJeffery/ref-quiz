import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <p className="question" tabIndex="0">
        {this.props.data2[this.props.id].question}
      </p>
);}}
export default Question;
