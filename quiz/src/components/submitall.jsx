import React, { useState } from 'react';

/*https://stackoverflow.com/questions/53685140/how-to-change-button-text-in-reactjs*/

  const GradeAll = (props) => {
    const [isGraded, setIsGraded] = useState(false);
    const toggleg = () => setIsGraded(!isGraded);
    if(isGraded){
      return (
          <button className="gradeall" onClick={toggleg}>
            Reset Test
          </button>
        );
    }
    else {
      return (
          <button className="gradeall" onClick={toggleg}>
            Grade Test
          </button>

        );
    };
}

export default GradeAll;
