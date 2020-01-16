import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import fetch from '../../core/nextFetch';
import { api } from '../../constants/Api';

const fetchLogout = (info, fetchUserInfo) => {
  fetch.post(api.logout, {
    data: info
  }).then((res) => {
    fetchUserInfo({});
    message.success(res.message);
  }).catch(e => {
    message.error(e.message);
  });
};

const Logout = ({ userInfo, fetchUserInfo }) => (
  <Button onClick={() => fetchLogout(userInfo, fetchUserInfo)} type='primary' ghost>注销</Button>
);

export default Logout;

Logout.propTypes = {
  userInfo: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired
};
