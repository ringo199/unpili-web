
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react'; 

const gutter = { xs: 8, sm: 16, md: 24, lg: 32 };

const colSpan = { xs: 24, sm: 12, md: 8, lg: 6 };

// const getSize = (url) => {
//   if (!Image) return {};
//   const img = new Image();
//   img.src = url;

//   return {
//     width: img.width,
//     height: img.height
//   };
// };
class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { rows } = this.props;
    return (
      <Row style={{ width: '100%' }} gutter={gutter}>
        {
          rows.map(item => {
            return (
              <Col
                {...colSpan}
                key = {item.id}
              >
                <Link href={`/video/[videoPage]`} as={`/video/${item.id}`}>
                  <div style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    paddingBottom: '60%',
                    backgroundImage: `url(${item.cover})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat'
                  }}/>
                </Link>
                <div>{item.title}</div>
              </Col>
            );
          })
        }
      </Row>
    );
  }
}

VideoList.propTypes = {
  rows: PropTypes.array.isRequired
};

export default VideoList;