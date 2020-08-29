import React from 'react';

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
                    <div><a target="_blank" rel="noopener noreferrer" href={urlstr}>Rule Reference: {this.props.rulenum}</a></div>
                    <div>The correct answer is: {fullans}</div>
                  </div>)
              }
              if(isShowAnswer!==true){
                  if(this.props.correct===true){
                    return(
                      <div className='questionfooter'>
                      <p className='right'>
                        Correct
                      </p>
                    <a target="_blank" rel="noopener noreferrer" href={urlstr}>Rule Reference: {this.props.rulenum}</a>
                    </div>
                  )
                    }
                  if(this.props.correct!==true){


                    return(
                      <div className='questionfooter'>
                        <p className='wrong'> Incorrect </p>
                        <a target="_blank" rel="noopener noreferrer" href={urlstr}>Rule Reference: {this.props.rulenum}</a>
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
