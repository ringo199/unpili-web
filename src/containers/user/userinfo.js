import { connect } from 'react-redux';
import { fetchUserInfo } from '../../redux/actions/userinfo';
import UserInfo from '../../components/User/UserInfo';

const mapStateToProps = state => ({
  ...state.user.info
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo(payload) {
    dispatch(fetchUserInfo(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
