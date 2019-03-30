/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import AppHeader from './Components/AppHeader/AppHeader';
import AppNavigation from './Components/AppNavigation/AppNavigation';
import UserMenu from './Components/UserMenu/UserMenu';

import OrderHistory from './Components/OrderHistory/OrderHistory';

import MenuList from './Components/MenuList/MenuList';

import SignInForm from './Components/SignInForm/SignInForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import MenuItemComment from './Components/MenuItemComment/MenuItemComment';

import './App.css';

import DEFAULT_MENU from './Data/menu.json';

const MENU_ITEMS = [
  { name: 'Menu', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Delivery', href: '#' },
];
const USER_MENU_ITEMS = [
  { name: 'Account', href: '#' },
  { name: 'Order history', href: '#' },
  { name: 'Meal planner', href: '#' },
];

const DEFAULT_USER = {
  login: 'axZerk',
  email: 'axZerk@axZerk.com',
  password: 'axZerk',
  phone: '',
  userAvatar: 'https://avatars1.githubusercontent.com/u/17479434?s=400&v=4',
  userName: 'Bob Ross',
};

const filteredMenuItems = (filter, menuData) => {
  if (filter === '') return menuData;
  return menuData.filter(
    menuItem =>
      menuItem.name.toLowerCase().includes(filter.toLowerCase()) ||
      menuItem.description.toLowerCase().includes(filter.toLowerCase()),
  );
};

class App extends Component {
  state = {
    currentUser: {
      ...DEFAULT_USER,
    },
    menuItems: DEFAULT_MENU,
    filter: '',
    comment: '',
    rating: 1,
  };

  handleFilterChange = event => {
    // console.log('event.target.value=', event.target.value);
    this.setState({
      filter: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('this.state befor reset=', this.state);
    this.reset();
    // console.log('this.state after reset=', this.state);
  };

  reset = () => {
    // console.log('this.state in reset=', this.state);
    this.setState({ currentUser: { ...DEFAULT_USER } });
  };

  handleCommentChange = event => {
    // console.log("event.target.value=", event.target.value);
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    const { currentUser, menuItems, filter, comment, rating } = this.state;
    // console.log('currentUser =', currentUser);
    // console.log('this.handleSubmit =', this.handleSubmit);
    const filteredMenu = filteredMenuItems(filter, menuItems);
    return (
      <div className="App">
        <AppHeader>
          <AppNavigation menuItems={MENU_ITEMS} />
          <UserMenu currentUser={currentUser} userMenuItems={USER_MENU_ITEMS} />
        </AppHeader>
        <hr />
        <main>
          <OrderHistory />
          <hr />
          <MenuList
            menuItems={filteredMenu}
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />
          <hr />
          <SignInForm onSubmit={this.handleSubmit} />
          <hr />
          <SignUpForm onSubmit={this.handleSubmit} />
          <hr />
          <MenuItemComment
            comment={comment}
            rating={rating}
            currentUser={currentUser}
            onChange={this.handleCommentChange}
          />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
