import React from 'react';

class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.handleRuleClick = this.handleRuleClick.bind(this);
    this.state = {
      isRuleShow: false
    };
  };

  handleRuleClick(url) {
    this.setState({isRuleShow:true})
  }

  render() {
if(this.state.isRuleShow===true){
        window.showModalDialog(`${this.props.hrf}`)}

  return (
    <div>
      <button className="specialbuttons"
      onClick={this.handleRuleClick}>Rule:{this.props.rulenum}</button>
    </div>
  );

}
}
export default Rule;
