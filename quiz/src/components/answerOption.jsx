import React from 'react';
import Grade from './submitone.jsx'
//import $ from 'jquery';

class Answers extends React.Component {

  constructor(props) {
    super(props);
    this.handleShowOneAnsClick = this.handleShowOneAnsClick.bind(this);
    this.state = {
      isOneGraded: this.props.graded,
      isShowOneAnswer: false,
      answerorder: [],
      isCorrect: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.graded !== prevProps.graded) {
      this.setState({
        isOneGraded: this.props.graded,
        isShowOneAnswer: false
      })
      if (this.props.graded === false) {
        this.setState({
          answerorder: [],
          isCorrect: false
        })
      }
      if (this.props.graded !== false) {
        if (this.state.isCorrect === true) {
          this.props.addpoints();
        }
      }
    }
  };

  handleAnswerClick(answer, isgrade) {
    let userAnswer = answer;
    let correctAnswer = this.props.data1.correctanswer;
    let isCorrect = userAnswer === correctAnswer;
    this.setState({
      isCorrect: isCorrect
    });

  };

  handleShowOneAnsClick() {
    this.setState({isShowOneAnswer: true});
  }

  render() {
    console.log('answers key',this.props.name)
      var a1 = [];
      const answers = this.props.answers
      const radioName = this.props.name;
      for (var q = 0; q < answers.length; q++) {
        let a
        let tempkey = this.state.answerorder
        if (this.props.graded === false) {
          //shuffle order of answer options if its in not graded state
          let olda = answers[this.props.shuffleanswers[q]];
          tempkey = tempkey.push(olda)
          a = this.state.answerorder[q]
        }
        if (this.props.graded !== false) {
          //dont change order of answer options if its in graded state
          a = tempkey[q]
        }
        a1.push(
        <div key={radioName+q}>
          <ul className="answers">
            <li>
              <input type="radio"
                      disabled={this.state.isOneGraded}
                      name={radioName}
                      id={a}
                      onClick={()=> this.handleAnswerClick(a,
                                                          this.state.isOneGraded)}/>
              <label>{a}</label>
            </li>
          </ul>
        </div>);}

    return (
      <div>
      {a1}
      <Grade showanswerclick={this.handleShowOneAnsClick}
              showanswer={this.state.isShowOneAnswer}
              onegraded={this.state.isOneGraded}
              name={radioName}
              data2={this.props.data1}
              correct={this.state.isCorrect}/>
      </div>
    );
  }
}
export default Answers;
