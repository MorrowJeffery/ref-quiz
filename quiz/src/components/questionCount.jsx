import React from 'react';

class Count extends React.Component {
  render() {
    return ( <p className = "question-count questions" >
                { this.props.num + 1 }
              </p>
    );
  }
}


export default Count;
