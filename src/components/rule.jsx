import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.handleRuleClick = this.handleRuleClick.bind(this);
    this.state = {
      isRuleShow: false
    };
  };

  handleRuleClick() {
    this.setState({isRuleShow:!this.state.isRuleShow})
  }

  render() {
      return (
        <div>
    <button className="specialbuttons" onClick={this.handleRuleClick}>Rule Reference</button>
          <Modal className="modal-xl" isOpen={this.state.isRuleShow}>
            <ModalHeader>Rule:{this.props.rulenum}</ModalHeader>
            <ModalBody>
            <iframe src={this.props.hrf} title={`Rulebook Documentation for Rule:${this.props.rulenum} (Test ID: ${this.props.name})`}/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.handleRuleClick}>Cancel</Button>
            </ModalFooter>
          </Modal>
</div>)
        }

}

export default Rule;
