import React from 'react';
import Count from './questionCount.jsx'

class Question extends React.Component {
  render() {
    return (
      <p className="question-asked questions" tabIndex="0">
        <Count data2={this.props.data2} id1={this.props.id} />
        {this.props.data2[this.props.id].question}
      </p>
);}}
export default Question;
