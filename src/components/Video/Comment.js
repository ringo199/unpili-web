import { Comment, Form, Button, List, Input, Icon } from 'antd';
import PropTypes from 'prop-types';
// import moment from 'moment';
import React from 'react';
import AvatarComp from '../common/AvatarComp';
import moment from 'moment';

const { TextArea } = Input;

class CommentList extends React.Component{
  state = {
    likes: 0,
    action: null,
    value: '',
    parentCommentId: -1
  };

  like = () => {
    this.setState({
      likes: 1,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      action: 'disliked',
    });
  };

  reply = (id) => {
    this.setState({
      parentCommentId: this.state.parentCommentId !== id ? id : -1
    });
  };
  viewReply = (id, pageNo = 1, pageSize = 10) => {
    const { fnGetCommentDetail } = this.props;
    fnGetCommentDetail({ commentId: id, pageNo, pageSize });
  }

  handleSubmit = () => {
    const { fnSaveComment, videoId } = this.props;
    const { parentCommentId } = this.state;
    if (!this.state.value) {
      return;
    }

    // this.setState({
    //   submitting: true,
    // });

    fnSaveComment({
      content: this.state.value,
      parentCommentId,
      videoId
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render () {
    const { comments: { rows, total, pageNo, pageSize },
      fnGetCommentList, fnGetCommentDetail, videoId, userInfo } = this.props;
    const { likes, action, value, parentCommentId } = this.state;
    return (
      <List
        dataSource={rows}
        header={`${total} 条评论`}
        itemLayout='horizontal'
        pagination={{
          onChange: page => {
            fnGetCommentList({ videoId, pageNo: page });
          },
          current: pageNo,
          pageSize,
          total
        }}
        renderItem={props => (
          <React.Fragment>
            <List.Item
              style={{
                display: 'flex',
                alignItems: 'start'
              }}
              key={props.commentNo}
              extra={`${props.commentNo}楼`}
            >
              <Comment
                style={{
                  flex: 1
                }}
                actions={[
                  <span key='comment-basic-like'>
                    <Icon
                      type='like'
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.like}
                    />
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
                  </span>,
                  <span key='comment-basic-dislike'>
                    <Icon
                      type='dislike'
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.dislike}
                    />
                  </span>,
                  props.replyTotal !== 0 &&
                  <span key='comment-basic-reply-to' onClick={() => this.viewReply(props.id)}>
                    查看回复 ({props.replyTotal})
                  </span>,
                  <span key='comment-basic-reply-to' onClick={() => this.reply(props.id)}>{
                    parentCommentId === props.id ? '收起回复' : '回复'
                  }</span>
                ]}
                avatar={<AvatarComp
                  url={props.avatar}
                />}
                author={props.author}
                content={<p>{props.content}</p>}
                datetime={moment(props.datetime).format('YYYY-MM-DD hh:mm:ss')}
              >
                {props.children && (
                  <List
                    dataSource={props.children.rows}
                    itemLayout='horizontal'
                    pagination={{
                      onChange: page => {
                        fnGetCommentDetail({ commentId: props.id, pageNo: page });
                      },
                      current: props.children.pageNo,
                      pageSize: props.children.pageSize,
                      total: props.children.total
                    }}
                    renderItem={childrenProps => (
                      <React.Fragment>
                        <List.Item
                          style={{
                            display: 'flex',
                            alignItems: 'start'
                          }}
                          key={childrenProps.commentNo}
                          extra={`${childrenProps.commentNo}楼`}
                        >
                          <Comment
                            style={{
                              flex: 0.5
                            }}
                            avatar={<AvatarComp
                              url={childrenProps.avatar}
                            />}
                            author={childrenProps.author}
                            content={<p>{childrenProps.content}</p>}
                            datetime={moment(childrenProps.datetime).format('YYYY-MM-DD hh:mm:ss')}
                          />
                        </List.Item>
                      </React.Fragment>
                    )}
                  />
                )}
              </Comment>
            </List.Item>
            {parentCommentId === props.id &&
              (Object.keys(userInfo).length !== 0 ? <Comment
                style={{
                  paddingLeft: '40px',
                  boxSizing: 'border-box'
                }}
                avatar={
                  <AvatarComp
                    url={userInfo.avatar}
                  />
                }
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={false}
                    value={value}
                  />
                }
              /> : <div>请登录之后再发表评论</div>)}
          </React.Fragment>
        )
        }
      />
    );
  }
}

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
        添加评论
      </Button>
    </Form.Item>
  </div>
);

export default class CommentComp extends React.Component {
  state = {
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    const { fnSaveComment, videoId } = this.props;
    if (!this.state.value) {
      return;
    }

    // this.setState({
    //   submitting: true,
    // });

    fnSaveComment({
      content: this.state.value,
      videoId
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { commentData, userInfo, fnGetCommentList, videoId, fnSaveComment, fnGetCommentDetail } = this.props;
    const { submitting, value } = this.state;

    return (
      <div>
        {commentData.rows.length > 0 &&
        <CommentList
          comments={commentData}
          fnGetCommentList={fnGetCommentList}
          fnSaveComment={fnSaveComment}
          fnGetCommentDetail={fnGetCommentDetail}
          videoId={videoId}
          userInfo={userInfo}
        />}
        {Object.keys(userInfo).length !== 0 ? <Comment
          avatar={
            <AvatarComp
              url={userInfo.avatar}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        /> : <div>请登录之后再发表评论</div>}
        
      </div>
    );
  }
}

CommentList.propTypes = {
  videoId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  commentNo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  datetime: PropTypes.number.isRequired,
  parentCommentId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  userInfo: PropTypes.object.isRequired,
  fnSaveComment: PropTypes.func.isRequired,
  fnGetCommentList: PropTypes.func.isRequired,
  fnGetCommentDetail: PropTypes.func.isRequired,
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

CommentComp.propTypes = {
  fnGetCommentDetail: PropTypes.func.isRequired,
  fnGetCommentList: PropTypes.func.isRequired,
  fnSaveComment: PropTypes.func.isRequired,
  commentData: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  videoId: PropTypes.string.isRequired
};
