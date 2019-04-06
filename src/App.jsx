import React, { Component } from 'react';
import AppHeader from './Components/AppHeader';
import Modal from './Components/Modal';
import './App.css';

export default class App extends Component {
  state = {
    isMadalOpen: false,
  };

  render() {
    const { isMadalOpen } = this.state;
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openmodal}>
          Open Modal
        </button>
        {isMadalOpen && <Modal onClose={() => null} />}
      </div>
    );
  }
}
