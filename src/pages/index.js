// import Home from '../components/Home';

// export default Home;
import VideoList from '../containers/video/list';
import { fetchVideoList } from '../redux/actions/video';

VideoList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchVideoList());
  return { isServer };
};

export default VideoList;
