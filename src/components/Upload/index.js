/* eslint-disable react/prop-types */
import {
  Upload, message,
  Button,
  Icon,
  Form, Input
} from 'antd';

import fetch from '../../core/nextFetch';
import { api, BASE_URL } from '../../constants/Api';

import React from 'react';


// const uploadProps = {
//   name: 'file',
//   action: BASE_URL + api.uploadFile,
//   headers: {
//     authorization: 'authorization-text',
//   },
//   supportServerRender: true,
//   onChange(info) {
//     console.log('info', info);
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       // ctx.setState({
//       //   videoUrl: info.file.response.data.path
//       // });
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   }
// };

class UploadPage extends React.Component {
  state = {
    loading: false,
    imageUrl: '',
    videoUrl: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (this.state.videoUrl === '') {
        if (!err) err = {};
        err = {...err, url: new Error('没有视频地址')};
        message.error('没有视频地址');
      }
      if (!err) {
        Object.assign(values, {
          cover: this.state.imageUrl,
          url: this.state.videoUrl
        });
        fetch.post(api.uploadSave, {
          data: values
        }).then(res => {
          message.success(res.message);
        });
      }
    });
  }
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  uploadImageProps = () => {
    const ctx = this;
    return {
      name: 'file',
      action: BASE_URL + api.uploadFile,
      headers: {
        authorization: 'authorization-text',
      },
      supportServerRender: true,
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          ctx.setState({
            imageUrl: info.file.response.data.path
          });
          console.log(ctx.state.imageUrl);
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
  };
  uploadVideoProps = () => {
    const ctx = this;
    return {
      name: 'file',
      action: BASE_URL + api.uploadFile,
      headers: {
        authorization: 'authorization-text',
      },
      supportServerRender: true,
      onChange(info) {
        console.log('info', info);
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          ctx.setState({
            videoUrl: info.file.response.data.path
          });
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
  };

  render () {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );

    const { getFieldDecorator } = this.props.form;
    const { imageUrl } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label='标题'>
          {getFieldDecorator('title')(<Input />)}
        </Form.Item>
        {/* <Form.Item label='封面图'>
          {getFieldDecorator('cover')(<Input />)}
        </Form.Item>
        <Form.Item label='上传'>
          {getFieldDecorator('url')(<Input />)}
        </Form.Item> */}
        <Form.Item label='封面图'>
          {getFieldDecorator('cover', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile
          })(
            <Upload {...this.uploadImageProps()}>
              {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          )}
        </Form.Item>
        <Form.Item label='上传' extra='上传视频'>
          {getFieldDecorator('url', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile
          })(
            <Upload {...this.uploadVideoProps()}>
              <Button>
                <Icon type='upload' /> 上传视频
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type='primary' htmlType='submit'>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(UploadPage);
