import React from "react";
import { Button, Modal, ModalBody, ModalFooter, CardImg } from "reactstrap";
import getWikiText from "./getWikiText";
import ModalHeaderT from "./ModalHeaderT";
import "./dogImg.css";
import { TwitterShareButton } from "react-share";
import shortId from "shortid";

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
    this.shiftTabFocus = this.shiftTabFocus.bind(this);

    this.id = shortId.generate();
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

  shiftTabFocus(e) {
    if (e.shiftKey && e.keyCode === 9) {
      console.log("Shift Tabbed: ");
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
    if (this.state.modal === true) {
      document.getElementById(this.id).focus();
    }
  }

  render() {
    return (
      <div>
        <CardImg
          id={this.id}
          className="dogImg"
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
          onKeyDown={this.shiftTabFocus}
        >
          <ModalHeaderT toggle={this.toggle} dogName={this.props.dogName} />
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
            <TwitterShareButton
              children={
                <span className="btn btn-primary" color="primary">
                  Tweet This Good Boi
                </span>
              }
              url={`http://jpg.party/${this.props.imgSrc}`}
              hashtags={[this.props.dogName]}
            />

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
