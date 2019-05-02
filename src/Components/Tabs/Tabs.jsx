import React, { Component } from 'react';
import Tab from './Tab';

import styles from './Tabs.module.css';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }

  changeActiveTabIndex = idx => {
    this.setState({
      activeTabIndex: idx,
    });
  };

  render() {
    const { items } = this.props;
    const { activeTabIndex } = this.state;
    // const activeTab = items[activeTabIndex];
    const { title, text } = items[activeTabIndex];
    // console.log(activeTabContent);
    console.log('render');
    return (
      <div className={styles.container}>
        <div className={styles.actions}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? styles.active : styles.button}
              type="button"
              key={item.label}
              onClick={() => this.changeActiveTabIndex(idx)}
              // onClick={this.changeActiveTabIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* <Tab title={activeTab.title} text={activeTab.text} /> */}
        <Tab title={title} text={text} />
      </div>
    );
  }
}
