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
import MenuItemRating from './Components/MenuItemRating/MenuItemRating';

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
    comment: ['Amazing dish!'],
    currentComment: '',
    rating: 5,
    currentRating: 0,
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ currentUser: { ...DEFAULT_USER } });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddComment = event => {
    event.preventDefault();
    const commentToAdd = event.target[0].value;
    this.setState(state => ({
      comment: [...state.comment, commentToAdd],
      currentComment: '',
    }));
    event.target.reset();
  };

  handleChangeRating = event => {
    event.preventDefault();
    const currentRating = +event.target[0].value;
    this.setState(state => ({
      rating: (state.rating + currentRating) / 2,
      currentComment: '',
    }));
  };

  render() {
    const {
      currentUser,
      menuItems,
      filter,
      comment,
      rating,
      currentRating,
      currentComment,
    } = this.state;
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
            currentComment={currentComment}
            rating={rating}
            currentUser={currentUser}
            onChange={this.handleChange}
            onAddComment={this.handleAddComment}
          />
          <MenuItemRating
            rating={rating}
            currentRating={currentRating}
            onChange={this.handleChange}
            onChangeRating={this.handleChangeRating}
          />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
