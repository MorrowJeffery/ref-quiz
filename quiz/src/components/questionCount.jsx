import React from 'react';

class Count extends React.Component {
  render() {
    return (
<div className="question-count">
<span>{this.props.id1+1}</span>
</div>
);}}


export default Count;
