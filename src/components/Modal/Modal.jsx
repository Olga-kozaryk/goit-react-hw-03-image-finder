import { Component } from "react";
import { Overlay } from "./Overlay.styled";
import { ModalStyled } from "./Modal.styled";

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClose = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  }

  render() {
    return (
    <Overlay onClick={this.handleClose}>
      <ModalStyled>{this.props.children}    
      </ModalStyled>
    </Overlay>)
  }
}
