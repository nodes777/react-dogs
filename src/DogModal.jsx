import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg
} from "reactstrap";
import getWikiText from "./getWikiText";

class DogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.myRef = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getWikiText = getWikiText.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.tabFocus = this.tabFocus.bind(this);
  }
  keyPress(e) {
    if (e.keyCode === 13) {
      this.openModal();
    }
  }
  tabFocus(e) {
    if (e.keyCode === 9) {
      console.log("Tabbed: ");
      console.log(this.myRef);
      e.preventDefault();
      this.myRef.current.setFocus();
    }
  }

  openModal() {
    this.getWikiText(this.props.dogName);
    this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <CardImg
          tabIndex="0"
          onKeyDown={this.keyPress}
          onClick={this.openModal}
          top
          width="100%"
          src={this.props.imgSrc}
          alt={this.props.dogName}
        />

        <Modal
          ref={this.myRef}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.dogName}</ModalHeader>
          <ModalBody>
            <CardImg
              top
              width="100%"
              src={this.props.imgSrc}
              alt={this.props.dogName}
            />
            {this.state.wikiText}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggle}
              onKeyDown={this.tabFocus}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DogModal;
