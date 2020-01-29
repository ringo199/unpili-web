import { Comment, Form, Button, List, Input } from 'antd';
import PropTypes from 'prop-types';
// import moment from 'moment';
import React from 'react';
import AvatarComp from '../common/AvatarComp';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} 条评论`}
    itemLayout='horizontal'
    renderItem={props => 
      <List.Item
        style={{
          display: 'flex'
        }}
        key={props.id}
        // actions={[
        //   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
        //   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
        //   <IconText type="message" text="2" key="list-vertical-message" />,
        // ]}
        extra={`${props.id}楼`}
      >
        <Comment
          style={{
            flex: 1
          }}
          avatar={<AvatarComp
            url={props.avatar}
          />}
          author={props.author}
          content={<p>{props.content}</p>}
          datetime={moment(props.datetime).format('YYYY-MM-DD hh:mm:ss')}
        />
      </List.Item>
    }
  />
);

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

    // setTimeout(() => {
    //   this.setState({
    //     submitting: false,
    //     value: '',
    //     comments: [
    //       {
    //         author: 'Han Solo',
    //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         content: <p>{this.state.value}</p>,
    //         datetime: moment().fromNow(),
    //       },
    //       ...this.state.comments,
    //     ],
    //   });
    // }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { commentData, userInfo } = this.props;
    const { submitting, value } = this.state;

    return (
      <div>
        {commentData.rows.length > 0 && <CommentList comments={commentData.rows} />}
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
  comments: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  datetime: PropTypes.number.isRequired
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

CommentComp.propTypes = {
  fnSaveComment: PropTypes.func.isRequired,
  commentData: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  videoId: PropTypes.string.isRequired
};
