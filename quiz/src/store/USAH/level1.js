import React from 'react';

const QUESTION_U1 = {
  1:{
    question: 'What is icing?',
    answers: [
      'When a player of a team shoots, bats with the hand or stick or deflects the puck from his own half of the ice to the other half and there is little likelihood of the team who shot the puck to get to the puck before the defending team touches the puck or it crosses the defending teams goal line.',
      'when a player bats the puck in the air, or push it along the ice with his hand in his defending zone, directly to a teammate also in the defending zone',
      'when players of an attacking team precede the puck into the attacking zone',
      'When a player of a team shoots, bats with the hand or stick or deflects the puck from his own half of the ice completely beyond the goal line of the opposing team'
    ],
    correct: 3
  },
  2:{
    question: <span>What are the three types of JavaScript errors?</span>,
    answers: [
      <span>Parse Errors, Syntax Errors and Runtime Errors.</span>,
      <span>Loading Errors, Runtime Errors and Logic Errors.</span>,
      <span>Syntax Errors, Logic Errors and Loading Errors.</span>,
      <span>Bad Errors, Very Bad Errors, and Fatal Errors.</span>
    ],
    correct: 1
  },
  3:{
    question: <span>In React, which is TRUE about the difference between a class component, a PureComponent, and a functional component?</span>,
    answers: [
      <span>Standard class components have state, lifecycle hooks, and refs.</span>,
      <span>A PureComponent is just like a class component, but handles shouldComponentUpdate for you, with a shallow check for changes in props or state. This allows for a performance boost by preventing unnecessary rerenders.</span>,
      <span>Functional components are presentational; they don't have access to state or lifecycle hooks, and can't use refs.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  }
};

export default QUESTION_U1;


//export default QUESTION_U1;
