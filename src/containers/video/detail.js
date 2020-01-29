import { connect } from 'react-redux';
import { fetchOneVideo } from '../../redux/actions/video';
import { fetchCommentList, fetchSaveComment, fetchCommentDetail } from '../../redux/actions/comment';
import VideoDetail from '../../components/Video/VideoDetail';

const mapStateToProps = state => ({
  ...state.video.cur,
  userInfo: {
    ...state.user.info.userInfo
  },
  commentList: {
    ...state.comment.list
  }
});

const mapDispatchToProps = dispatch => ({
  fetchOneVideo() {
    dispatch(fetchOneVideo());
  },
  fetchCommentList(payload){
    dispatch(fetchCommentList(payload));
  },
  fetchSaveComment(payload){
    dispatch(fetchSaveComment(payload));
  },
  fetchCommentDetail(payload){
    dispatch(fetchCommentDetail(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
