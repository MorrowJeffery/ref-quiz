import React from 'react';

class Grade extends React.Component {

  render() {
        const isGraded = this.props.onegraded;
        const isShowAnswer = this.props.showanswer;
        let fullans = this.props.data2.correctanswer;


        if (isGraded===true) {
            if(isShowAnswer===true){

                return(
                  <div>
                    <h6> {fullans} </h6>
                  </div>)
              }
              if(isShowAnswer!==true){
                  if(this.props.correct===true){
                    return(
                      <div>
                        <h6>Correct!</h6>
                      </div>)
                    }
                  if(this.props.correct!==true){


                    return(
                      <div>
                        <h6>WRONG!</h6>
                        <button className="grade" onClick={this.props.showanswerclick}>
                        Show Answer
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
