import { connect } from 'react-redux';
import { fetchVideoList } from '../../redux/actions/video';
import VideoList from '../../components/Video/VideoList';

const mapStateToProps = state => ({
  ...state.video.list
});

const mapDispatchToProps = dispatch => ({
  fetchVideoList() {
    dispatch(fetchVideoList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
