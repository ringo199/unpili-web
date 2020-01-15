import { connect } from 'react-redux';
import { fetchOneVideo } from '../../redux/actions/video';
import VideoDetail from '../../components/Video/VideoDetail';

const mapStateToProps = state => ({
  ...state.video.cur
});

const mapDispatchToProps = dispatch => ({
  fetchOneVideo() {
    dispatch(fetchOneVideo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
