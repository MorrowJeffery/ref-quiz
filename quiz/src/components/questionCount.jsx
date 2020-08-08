import React from 'react';

class Count extends React.Component {
  render() {
    return (
<div className="question-count">
Question <span>1</span> of <span>{this.props.data.length}</span>
</div>
);}}


export default Count;
