import React, { useState } from 'react';

  const G = (props) => {
    const [isGraded, setIsGraded] = useState(false);
    const toggleg = () => setIsGraded(!isGraded);
    if(isGraded){
      return (
          <button className="grade" onClick={toggleg}>
            Reset
          </button>
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

export default G;
