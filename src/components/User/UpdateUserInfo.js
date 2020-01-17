import FormModal from '../common/FormModel';
import { Button, message } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import fetch from '../../core/nextFetch';
import { api } from '../../constants/Api';

const formConfig = [
  {
    label: '昵称',
    value: 'nickname'
  },
  {
    label: '用户名',
    value: 'username',
    rules: [{ required: true, message: '请输入用户名！' }]
  },
  {
    label: '密码',
    value: 'pwd',
    type: 'password',
    rules: [{ required: true, message: '请输入密码！' }]
  },
  {
    label: '头像',
    type: 'upload',
    value: 'avatar'
  },
  {
    label: '头像',
    type: 'textarea',
    value: 'avatar'
  }
];

export default class Register extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOk = () => {
    // const { fetchRegister } = this.props;
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      // fetchRegister({ ...values });
      fetch.post(api.register, {
        data: values
      }).then(res => {
        message.success(res.message);
        form.resetFields();
        this.setState({ visible: false });
      }).catch(e => {
        message.error(e.message);
      });

      // while (Object.keys(registerResult).length === 0) {
      //   if (registerResult.code === 0) {
      //     form.resetFields();
      //     this.setState({ visible: false });
      //   } else {
      //     message.error(registerResult.message);
      //   }
      // }

    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>
          注册
        </Button>
        <FormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          title='注册'
          formConfig={formConfig}
        />
      </div>
    );
  }
}

Register.propTypes = {
  fetchRegister: PropTypes.func.isRequired,
  registerResult: PropTypes.object.isRequired
};
