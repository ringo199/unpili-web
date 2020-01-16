import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Popover, Icon } from 'antd';
import Register from '../../containers/user/register';
import Login from '../../containers/user/login';
import Logout from './Logout';
import Link from 'next/link';

const UserInfo = ({ userInfo, fetchUserInfo }) => (
  <div style={{
    display: 'flex'
  }}>
    {
      userInfo.username ?
        <Popover content={
          <span>
            昵称：{userInfo.nickname}<br />
            用户名：{userInfo.username}<br />
            <Logout userInfo={userInfo} fetchUserInfo={fetchUserInfo} />
            <Link prefetch href={'/upload'}>
              <div>
                <Icon type='upload' />
                上传
              </div>
            </Link>
          </span>
        } title='用户信息' trigger='click'>
          nya! {userInfo.nickname}
        </Popover>
        :
        <Fragment>
          <Login fetchUserInfo={fetchUserInfo} />
          <Register />
        </Fragment>
    }
  </div>
);

export default UserInfo;

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired
};
