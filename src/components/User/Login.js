import FormModal from '../common/FormModel';
import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const formConfig = [
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

  handleCreate = () => {
    const { fetchLogin } = this.props;
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      fetchLogin({ ...values }).then(res => {
        console.log('res', res);
      }).catch(e => {
        console.log('e', e);
      });
      // form.resetFields();
      // this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button style={{ margin: '0 10px' }} onClick={this.showModal} type='primary' ghost>登录</Button>

        <FormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
          title='登录'
          formConfig={formConfig}
        />
      </div>
    );
  }
}

Register.propTypes = {
  fetchLogin: PropTypes.func.isRequired
};
