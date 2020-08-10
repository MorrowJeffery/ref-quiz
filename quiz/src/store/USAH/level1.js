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
    question: 'What are the three types of JavaScript errors?',
    answers: [
      "Parse Errors, Syntax Errors and Runtime Errors.",
      "Loading Errors, Runtime Errors and Logic Errors.",
      "Syntax Errors, Logic Errors and Loading Errors.",
      "Bad Errors, Very Bad Errors, and Fatal Errors."
    ],
    correct: 1
  },
  3:{
    question: "In React, which is TRUE about the difference between a class component, a PureComponent, and a functional component?",
    answers: [
      "Standard class components have state, lifecycle hooks, and refs.",
      "A PureComponent is just like a class component, but handles shouldComponentUpdate for you, with a shallow check for changes in props or state. This allows for a performance boost by preventing unnecessary rerenders.",
      "Functional components are presentational; they don't have access to state or lifecycle hooks, and can't use refs.",
      "All of the above."
    ],
    correct: 3
  }
};

export default QUESTION_U1;


//export default QUESTION_U1;
