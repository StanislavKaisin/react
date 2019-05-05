/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, createRef } from 'react';
// import avatar from 'https://avatars0.githubusercontent.com/u/17479434?s=460&v=4';
// import avatar from '../logo.svg';
import DropDown from './DropDown/DropDown';
import Avatar from '../Avatar/Avatar';
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  // _containerRef = createRef();
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount = () => {
    // console.log('componentDidMount');
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeyPress);
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount = () => {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleWindowKeyPress);
  };

  handleWindowClick = event => {
    // console.log('this._containerRef=', this.containerRef);
    // console.log('cliccontainer = k!!', event);
    const isTargetInsideContainer = this.containerRef.current.contains(
      event.target,
    );
    const { isDropDownOpen } = this.state;
    // console.log('isTargetInsideContainer =', isTargetInsideContainer);
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropDown();
    }
    // this.setState({
    //   isDropDownOpen: false,
    // });
  };

  handleWindowKeyPress = event => {
    // console.log('event =', event);
    const { isDropDownOpen } = this.state;
    if (event.key === 'Escape' && isDropDownOpen) {
      // console.log('event.key =', event.key);
      this.closeDropDown();
    }
  };

  openDropDown = () => {
    this.setState({
      isDropDownOpen: true,
    });
  };

  closeDropDown = () => {
    this.setState({
      isDropDownOpen: false,
    });
  };

  /*
  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };
  */

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;
    // console.log('Render');
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        onClick={this.openDropDown}
        className={styles.userMenu}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <p className={styles.userName}>{name}</p>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}
