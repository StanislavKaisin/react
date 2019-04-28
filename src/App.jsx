import React, { Component } from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import Modal from './Components/Modal/Modal';
import Tabs from './Components/Tabs/Tabs';
import tabsData from './tabs.json';
import './App.css';

export default class App extends Component {
  state = {
    isMadalOpen: false,
  };

  render() {
    const { isMadalOpen } = this.state;
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
      disabled: true,
    };
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openmodal} style={style}>
          Open Modal
        </button>
        {isMadalOpen && <Modal onClose={() => null} />}
        <Tabs items={tabsData} />
      </div>
    );
  }
}
