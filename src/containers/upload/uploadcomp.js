import { connect } from 'react-redux';
import { tempUserInfo } from '../../redux/actions/upload';
import UploadComp from '../../components/common/UploadComp';

const mapStateToProps = state => ({
  ...state.user.info
});

const mapDispatchToProps = dispatch => ({
  tempUserInfo(payload) {
    dispatch(tempUserInfo(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadComp);
