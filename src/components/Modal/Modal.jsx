import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalW } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    const backDrop = e.currentTarget;
    const modal = e.target;
    if (backDrop === modal) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, user } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackDropClick}>
        <ModalW>
          <img src={largeImageURL} alt={user} />
        </ModalW>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
