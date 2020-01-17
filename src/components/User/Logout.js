import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import fetch from '../../core/nextFetch';
import { api } from '../../constants/Api';
import store from 'store2';

const fetchLogout = (e, info, fetchUserInfo) => {
  e.preventDefault();
  fetch.post(api.logout, {
    data: info
  }).then((res) => {
    store.remove('username');
    fetchUserInfo({});
    message.success(res.message);
  }).catch(e => {
    message.error(e.message);
  });
};

const Logout = ({ userInfo, fetchUserInfo }) => (
  <Button onClick={(e) => fetchLogout(e, userInfo, fetchUserInfo)} type='primary' ghost>注销</Button>
);

export default Logout;

Logout.propTypes = {
  userInfo: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired
};
