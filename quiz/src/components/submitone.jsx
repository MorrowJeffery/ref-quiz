import React, { useState } from 'react';

  const Grade = (props) => {
    const [isGraded, setIsGraded] = useState(false);
    const toggleg = () => setIsGraded(!isGraded);
    if(isGraded){
      return (
        <div>
        <h6> some answer </h6>
          <button className="grade" onClick={toggleg}>
            Reset
          </button>
          </div>
        );
    };
    if(!isGraded){
      return (
          <button className="grade" onClick={toggleg}>
            Grade
          </button>
        );
    };
}

export default Grade;
