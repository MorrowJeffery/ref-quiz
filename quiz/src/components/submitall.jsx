import React, { useState } from 'react';

  const G = (props) => {

    const text='Grade';
    const [isGraded, setIsGraded] = useState(false);
    const toggleg = () => setIsGraded(!isGraded);
    console.log('look1',isGraded)
    console.log('text ng', text)
    if(isGraded){
      const text='Reset'
      console.log('look2', isGraded)
      console.log('text g', text)
    };

return (
    <button className="grade" onClick={toggleg}>
      {text}
    </button>

  );

}

export default G;





import React, { useState } from 'react';

class GradeButton extends React.Component {
  render() {
    var gbutton = [];
    const [isGraded, setIsGraded] = useState(false);
    const toggleg = () => setIsGraded(!isGraded);

    if(!isGraded){
        const text='Grade';
        gbutton.push(<button onClick={toggleg}/>);
        console.log('look1',isGraded)
        console.log('text ng', text)
      }
    if(isGraded){
        const text='Reset'
        gbutton.push(<button onClick={toggleg}/>);
        console.log('look2', isGraded)
        console.log('text g', text)
      };


    return (
      <div>
      {gbutton}
      </div>
    );
  }
}

export default GradeButton;
