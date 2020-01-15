import React from 'react';
import { fetchVideoList } from '../../redux/actions/video';
// import { Row, Col } from 'antd';
import VideoList from '../../containers/video/list';

VideoList.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchVideoList());
  return { isServer };
};

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <VideoList />
      </div>
    );
  }
}
