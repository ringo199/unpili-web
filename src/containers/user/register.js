import { connect } from 'react-redux';
import { fetchRegister } from '../../redux/actions/register';
import Register from '../../components/User/Register';

const mapStateToProps = state => ({
  ...state.user.register,
});

const mapDispatchToProps = dispatch => ({
  fetchRegister(payload) {
    dispatch(fetchRegister(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
