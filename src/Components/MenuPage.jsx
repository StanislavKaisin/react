import React, { Component } from 'react';
import MenuGrid from './MenuGrid';

import * as API from '../services/api';

export class MenuPage extends Component {
  state = {
    menu: [],
  };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      // console.log('menu=', menu);
      this.setState({ menu });
    });
    API.getMenuItemById(1);
  }

  handleDeleteItem = id => {
    // console.log('id=', id);
    API.deleteMenuItem(id).then(() => {
      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    // console.log('id=', id);
    API.getMenuItemById(id).then(item => {
      console.log('item=', item);
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name${Date.now()}`,
      price: Math.random(),
      image: 'https://placeimg.com/640/480/any',
    };
    API.addMenuItem(item).then(newItem => {
      console.log('newItem=', newItem);
      this.setState(state => ({
        menu: [newItem, ...state.menu],
      }));
    });
  };

  // onShowMoreInfo, onDelete

  render() {
    const { menu } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Add new menu item
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}

export default MenuPage;
