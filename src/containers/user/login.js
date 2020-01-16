import { connect } from 'react-redux';
import { fetchLogin } from '../../redux/actions/login';
import Login from '../../components/User/Login';

const mapStateToProps = state => ({
  ...state.user.login,
  ...state.user.info
});

const mapDispatchToProps = dispatch => ({
  fetchLogin(payload) {
    dispatch(fetchLogin(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
