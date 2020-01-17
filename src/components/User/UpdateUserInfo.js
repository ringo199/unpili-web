/* eslint-disable no-unused-vars */
import FormModal from '../common/FormModel';
import { Button, message } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import fetch from '../../core/nextFetch';
import { api } from '../../constants/Api';

const formConfig = [
  {
    label: '用户名',
    value: 'username',
    type: 'readonly'
  },
  {
    label: '昵称',
    value: 'nickname'
  },
  {
    label: '头像',
    type: 'upload',
    value: 'avatar'
  },
  {
    label: '简介',
    type: 'textarea',
    value: 'description'
  }
];

export default class Register extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    const { userInfo } = this.props;
    this.setState({ visible: true });
    this.formRef.props.form.setFieldsValue({ ...userInfo });
    this.props.tempUserInfo({
      avatar: userInfo.avatar
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.formRef.props.form.resetFields();
  };

  handleOk = () => {
    const { tempInfo, fetchUserInfo } = this.props;
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      Object.assign(values, tempInfo);

      fetch.post(api.updateUserInfo, {
        data: values
      }).then(res => {
        message.success(res.message);
        fetchUserInfo();
        form.resetFields();
        this.setState({ visible: false });
      }).catch(e => {
        message.error(e.message);
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <Button type='link' onClick={this.showModal}>
          个人信息修改
        </Button>
        <FormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          title='个人信息修改'
          formConfig={formConfig}
        />
      </div>
    );
  }
}

Register.propTypes = {
  tempUserInfo: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  tempInfo: PropTypes.object.isRequired
};
