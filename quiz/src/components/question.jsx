import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <p className="question" tabIndex="0">
        {this.props.data[0].question}
      </p>
);}}
export default Question;
