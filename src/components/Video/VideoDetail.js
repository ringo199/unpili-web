/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Card, Row, Col } from 'antd';
// import Reflv from 'reflv';
import AvatarComp from '../common/AvatarComp';

const { Meta } = Card;

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { title, url, createTime,
      createNickname, createAvatar, createDescription, loading } = this.props;

    return (
      <div style={{
        padding: '16px',
        boxSizing: 'border-box',
        minWidth: '60vw'
      }}>
        <Row style={{
          padding: '16px 0',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Col span={8}>
            <h1>{title}</h1>
            <div>{moment(createTime).format('YYYY-MM-DD hh:mm:ss')}</div>
          </Col>
          <Col span={8} push={8}>
            <Card loading={loading}>
              <Meta
                avatar={
                  <AvatarComp url={createAvatar} />
                }
                title={createNickname}
                description={createDescription}
              />
            </Card>
          </Col>
        </Row>
        <video type='mp4' src={url} controls />
        {/* {loadFlv(url)} */}
      </div>
    );
  }
}

export default UserDetail;

UserDetail.propTypes = {
  router: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createTime: PropTypes.number.isRequired,
  createNickname: PropTypes.string.isRequired,
  createAvatar: PropTypes.string.isRequired,
  createDescription: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};
