import React from 'react';
import Rule from '../components/rule.jsx';

class Grade extends React.Component {
  render() {
        const isGraded = this.props.onegraded;
        const isShowAnswer = this.props.showanswer;
        let fullans = this.props.data2.correctanswer;
        const urlstr = 'https://www.usahockeyrulebook.com/page/show/'+this.props.rulelink

        if (isGraded===true) {
            if(isShowAnswer===true){

                return(
                  <div className='questionfooter'>
                    <p className='wrong'>Incorrect</p>
                    <div>
                    <Rule hrf={urlstr} rulenum={this.props.rulenum}/>
                    </div>
                    <div>Correct Answer: {fullans}</div>
                  </div>)
              }
              if(isShowAnswer!==true){
                  if(this.props.correct===true){
                    return(
                      <div className='questionfooter'>
                      <p className='right'>
                        Correct
                      </p>
                    <Rule hrf={urlstr} rulenum={this.props.rulenum}/>
                    </div>
                  )
                    }
                  if(this.props.correct!==true){
                    return(
                      <div className='questionfooter'>
                        <p className='wrong'> Incorrect </p>
                        <Rule hrf={urlstr} rulenum={this.props.rulenum}/>
                        <button className="specialbuttons" onClick={this.props.showanswerclick}>
                        Correct Answer
                        </button>
                      </div>)
                    }
                  }
                }

         if (isGraded!==true) {
          return(<div></div>)
        }
      }
    }

export default Grade;
