import { Menu, Icon } from 'antd';
import React from 'react';
import Link from 'next/link';

const menuList = [
  {
    key: 'home',
    icon: 'home',
    content: '首页',
    to: 'index'
  },
  {
    key: 'upload',
    icon: 'upload',
    content: '上传',
    to: 'upload'
  }
];

export default class App extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal'>
        {menuList.map(item => (
          <Menu.Item key={item.key}>
            <Link prefetch href={`/${item.to}`}>
              <div>
                <Icon type={item.icon} />
                {item.content}
              </div>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
