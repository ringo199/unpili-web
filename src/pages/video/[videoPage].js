import VideoDetail from '../../containers/video/detail';
import { fetchOneVideo } from '../../redux/actions/video';

// Router.routeChangeComplete((props) => {
//   console.log('props', props);

//   return true;
// });

VideoDetail.getInitialProps = async (props) => {
  const { store, isServer, query: { videoPage } } = props.ctx;
  store.dispatch(fetchOneVideo({ id: videoPage }));
  return { isServer };
};

export default VideoDetail;
