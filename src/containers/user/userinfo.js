import { connect } from 'react-redux';
import { fetchUserInfo } from '../../redux/actions/userinfo';
import { tempUserInfo } from '../../redux/actions/upload';
import UserInfo from '../../components/User/UserInfo';

const mapStateToProps = state => ({
  ...state.user.info
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo() {
    dispatch(fetchUserInfo());
  },
  tempUserInfo(payload) {
    dispatch(tempUserInfo(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
