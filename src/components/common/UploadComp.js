import { Upload, message, Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { api, BASE_URL } from '../../constants/Api';

class UploadComp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  uploadImageProps = () => {
    const { tempUserInfo, tempInfo } = this.props;
    return {
      name: 'file',
      action: BASE_URL + api.uploadFile,
      headers: {
        authorization: 'authorization-text',
      },
      supportServerRender: true,
      onChange(info) {
        if (info.file.status === 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          tempUserInfo({
            ...tempInfo,
            avatar: info.file.response.data.path
          });
          message.success('文件上传成功');
        } else if (info.file.status === 'error') {
          message.error('文件上传失败');
        }
      }
    };
  };
  render() {
    const uploadButton = (
      <div style={{
        width: '100%',
        height: '100%',
        border: '1px #ccc solid',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className='ant-upload-text'>上传图片</div>
      </div>
    );
    const { tempInfo } = this.props;

    console.log('this.props', this.props);

    return (
      <Upload
        {...this.uploadImageProps()}
      >
        <div style={{
          width: '100px',
          height: '100px'
        }}>
          {tempInfo && tempInfo.avatar ? <img src={tempInfo.avatar} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
        </div>
      </Upload>
    );
  }
}

export default UploadComp;

UploadComp.propTypes = {
  tempUserInfo: PropTypes.func.isRequired,
  tempInfo: PropTypes.object.isRequired
};
