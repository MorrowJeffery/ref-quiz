import React from 'react';

class Count extends React.Component {
  render() {
    return (
<div className="question-count questions">
{this.props.id1+1}
</div>
);}}


export default Count;
