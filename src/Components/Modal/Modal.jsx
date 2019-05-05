/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  backdropRef = createRef();

  modalWindowRef = createRef();

  state = {};

  handleBackdropClick = event => {
    const { onClose } = this.props;
    const { isModalOpen } = this.props;
    if (!isModalOpen) return;
    if (this.modalWindowRef.current.contains(event.target)) return;
    if (this.backdropRef.current.contains(event.target)) {
      onClose();
    }
  };

  componentDidMount = () => {
    window.addEventListener('click', this.handleBackdropClick);
  };

  componentWillUnmount = () => {
    window.removeEventListener('click', this.handleBackdropClick);
  };

  render() {
    const { onClose } = this.props;
    // console.log('onClose=', onClose);
    // console.log('this.props=', this.props);
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="Backdrop"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        // onKeyPress={this.handleWindowKeyPress}
      >
        <div className="ModalWindow" ref={this.modalWindowRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            in cupiditate pariatur nisi, praesentium corporis culpa ratione,
            repudiandae explicabo quo aspernatur ipsum inventore voluptatem
            libero ipsa est doloremque voluptate eos?
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
