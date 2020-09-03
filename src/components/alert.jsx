import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LogAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };

    render() {
        return (
            <div>
            <Modal className="modal-sm" isOpen={this.props.show}>
              <ModalHeader>Please Log In</ModalHeader>
                <form onSubmit={this.props.showclick}>
              <ModalBody>
              <label htmlFor="username">Username:</label>
              <input type="text"
              id="username"
              name="username"
              required
              onChange={this.props.user}
              value={this.props.value}
              />
              </ModalBody>
              <ModalFooter>
          <input type="submit" name="update_user" value="Login" />
          <input type="submit" name="createnew_user" value="Create Account" />
              </ModalFooter>
                </form>
            </Modal>
            </div>
        );
    }
}




export default LogAlert;
