import React, { Component } from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import Modal from './Components/Modal/Modal';
import Tabs from './Components/Tabs/Tabs';
import tabsData from './tabs.json';
import './App.css';

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleWindowKeyPress);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleWindowKeyPress);
  };

  handleModal = () => {
    // console.log('inside handleModal');
    const { isModalOpen } = this.state;
    // console.log('isModalOpen=', isModalOpen);
    if (!isModalOpen) {
      this.setState({
        isModalOpen: true,
      });
    } else {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  handleWindowKeyPress = event => {
    // console.log('event =', event);
    const { isModalOpen } = this.state;
    if (event.key === 'Escape' && isModalOpen) {
      // console.log('event.key =', event.key);
      this.handleModal();
    }
  };

  render() {
    const { isModalOpen } = this.state;
    const buttonStyles = {
      display: 'inline-flex',
      margin: '0 4px',
      padding: '8px 24px',
      border: 0,
      borderRadius: 2,
      fontSize: 14,
      fontFamility: 'inherit',
    };

    const style = {
      ...buttonStyles,
      // disabled: true,
    };
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.handleModal} style={style}>
          Open Modal
        </button>
        {isModalOpen && (
          // eslint-disable-next-line react/no-string-refs
          <Modal onClose={this.handleModal} isModalOpen={isModalOpen} />
        )}
        <Tabs items={tabsData} />
      </div>
    );
  }
}
