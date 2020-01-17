import { Modal, Form, Input } from 'antd';
import UploadComp from '../../containers/upload/uploadcomp';
import React from 'react';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const switchComp = (type) => {
  switch (type) {
    case 'readonly':
      return <Input readOnly />;
    case 'upload':
      return <UploadComp />;
    case 'password':
      return <Input type='password'/>;
    case 'textarea':
      return <TextArea autoSize={{ minRows: 3, maxRows: 4 }} />;
    default:
      return <Input />;
  }
};

const formItemLayout = {
  labelCol: { xs: 8, sm: 6, md: 4, lg: 4 },
  wrapperCol: { xs: 16, sm: 18, md: 20, lg: 20 },
};

class FormModel extends React.Component {
  render() {
    const { visible, onCancel, onOk, form, title, formConfig } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={title || '标题'}
        okText='提交'
        cancelText='取消'
        onCancel={onCancel}
        onOk={onOk}
      >
        <Form layout='vertical' {...formItemLayout}>
          {
            formConfig.map(item => (
              <Form.Item label={item.label}>
                {getFieldDecorator(item.value, {
                  ...item.options
                })(switchComp(item.type))}
              </Form.Item>
            ))
          }
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(FormModel);

FormModel.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  formConfig: PropTypes.array.isRequired
};
