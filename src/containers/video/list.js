import { connect } from 'react-redux';
import { fetchVideoList } from '../../redux/actions/video';
import VideoList from '../../components/Video/VideoList';

const mapStateToProps = state => ({
  rows: state.video.list.rows,
  pageNo: state.video.list.pageNo,
  pageSize: state.video.list.pageSize,
  total: state.video.list.total,
});

const mapDispatchToProps = dispatch => ({
  fetchVideoList() {
    dispatch(fetchVideoList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
