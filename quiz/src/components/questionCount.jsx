import React from 'react';

class Count extends React.Component {
  render() {
    return (
<p className="question-count questions">
{this.props.id1+1}
</p>
);}}


export default Count;
