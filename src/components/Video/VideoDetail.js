import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Card, Row, Col } from 'antd';
// import Reflv from 'reflv';
import Comment from './Comment';
import AvatarComp from '../common/AvatarComp';

const { Meta } = Card;

const colSpan = { xs: 24, sm: 12, md: 12, lg: 10 };

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { id: videoId, title, url, createTime, cover, commentList,
      fetchSaveComment,
      userInfo,
      createNickname, createAvatar, createDescription, loading } = this.props;

    return (
      <div style={{
        padding: '16px',
        boxSizing: 'border-box',
        minWidth: '60vw',
        maxWidth: '70vw'
      }}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>{title}_🍺🍐🍺🍐 (゜-゜)つロ 干杯~-unpili</title>
        </Head>
        <Row style={{
          padding: '16px 0',
          boxSizing: 'border-box'
        }}>
          <Col
            {...colSpan}
          >
            <h1>{title}</h1>
            <div>{moment(createTime).format('YYYY-MM-DD hh:mm:ss')}</div>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={4}
          ></Col>
          <Col
            {...colSpan}
          >
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
        <div style={{
          background: `url(${cover}) #eeeeee10 no-repeat`,
          backgroundSize: '100%',
          textAlign: 'center',
          width: '100%'
        }}>
          <video style={{
            maxWidth: '100%'
          }} type='mp4' src={url} controls />
        </div>
        <Comment fnSaveComment={fetchSaveComment} commentData={commentList} userInfo={userInfo} videoId={videoId} />
      </div>
    );
  }
}

export default UserDetail;

UserDetail.propTypes = {
  router: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  createTime: PropTypes.number.isRequired,
  createNickname: PropTypes.string.isRequired,
  createAvatar: PropTypes.string.isRequired,
  createDescription: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchSaveComment: PropTypes.func.isRequired,
  commentList: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};
