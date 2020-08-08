import React from 'react';

class Count extends React.Component {
  render() {
    return (
<div className="question-count">
Question <span>{this.props.id+1}</span> of <span>{this.props.data2.length}</span>
</div>
);}}


export default Count;
