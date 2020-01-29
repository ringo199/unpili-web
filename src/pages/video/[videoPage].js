import VideoDetail from '../../containers/video/detail';
import { fetchOneVideo } from '../../redux/actions/video';
import { fetchCommentList } from '../../redux/actions/comment';

// Router.routeChangeComplete((props) => {
//   console.log('props', props);

//   return true;
// });

VideoDetail.getInitialProps = async (props) => {
  const { store, isServer, query: { videoPage } } = props.ctx;
  store.dispatch(fetchOneVideo({ id: videoPage }));
  store.dispatch(fetchCommentList({ videoId: videoPage }));
  return { isServer };
};

export default VideoDetail;
