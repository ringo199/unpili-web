import { connect } from 'react-redux';
import { fetchUploadSave } from '../../redux/actions/upload';
import Upload from '../../components/Upload';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  fetchUploadSave() {
    dispatch(fetchUploadSave());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
