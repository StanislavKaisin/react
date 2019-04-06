import React, { Component } from 'react';

export default class Modal extends Component {
  state = {};

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
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
