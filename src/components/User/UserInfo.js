import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import AvatarComp from '../common/AvatarComp';
import { Popover, Icon, Button } from 'antd';
import Register from '../../containers/user/register';
import Login from '../../containers/user/login';
import UpdateUserInfo from './UpdateUserInfo';
import Logout from './Logout';
import Link from 'next/link';
import store from 'store2';

class UserInfo extends React.Component {
  componentDidMount () {
    const { fetchUserInfo } = this.props;
    if (store.get('token')) {
      fetchUserInfo();
    }
  }
  render () {
    const { tempInfo, userInfo, fetchUserInfo, tempUserInfo } = this.props;
    return (
      <div style={{
        display: 'flex'
      }}>
        {
          userInfo.username ?
            <Popover content={
              <span>
                <div style={{
                  width: '100%',
                  minHeight: '100px',
                  border: '1px solid #eeeeee',
                  color: '#bbb',
                  boxSizing: 'border-box',
                  padding: '10px'
                }}>
                  {userInfo.description ? userInfo.description : '这个人没有填写说明'}
                </div>
                <Link prefetch href={'/upload'}>
                  <Button type='link'>
                    <Icon type='upload' />
                    上传视频
                  </Button>
                </Link>
              </span>
            } title={
              <div>
                nya! {userInfo.username}
                <UpdateUserInfo
                  fetchUserInfo={fetchUserInfo}
                  tempUserInfo={tempUserInfo}
                  tempInfo={tempInfo}
                  userInfo={userInfo}
                />
              </div>
            } trigger='click' placement='bottomRight'>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <AvatarComp url={userInfo.avatar}/>
                <div style={{ margin: '0 10px' }}>{userInfo.nickname} </div>
                <Logout userInfo={userInfo} fetchUserInfo={fetchUserInfo} />
              </div>
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
  tempInfo: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  tempUserInfo: PropTypes.func.isRequired
};
