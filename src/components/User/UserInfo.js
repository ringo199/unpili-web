import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Popover, Icon } from 'antd';
import Register from '../../containers/user/register';
import Login from '../../containers/user/login';
import Logout from './Logout';
import Link from 'next/link';
import store from 'store2';

class UserInfo extends React.Component {
  componentDidMount () {
    const { fetchUserInfo } = this.props;
    if (store.get('username')) {
      fetchUserInfo();
    }
  }
  render () {
    const { userInfo, fetchUserInfo } = this.props;
    return (
      <div style={{
        display: 'flex'
      }}>
        {
          userInfo.username ?
            <Popover content={
              <span>
                昵称：{userInfo.nickname}<br />
                用户名：{userInfo.username}<br />
                <Link prefetch href={'/upload'}>
                  <div>
                    <Icon type='upload' />
                    上传
                  </div>
                </Link>
              </span>
            } title='用户信息' trigger='click'>
              nya! {userInfo.nickname} <Logout userInfo={userInfo} fetchUserInfo={fetchUserInfo} />
            </Popover>
            :
            <Fragment>
              <Login fetchUserInfo={fetchUserInfo} />
              <Register />
            </Fragment>
        }
      </div>
    );
  }
}


export default UserInfo;

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired
};
