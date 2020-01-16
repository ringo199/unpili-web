import { Modal, Form, Input } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

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
        <Form layout='vertical'>
          {
            formConfig.map(item => (
              <Form.Item label={item.label}>
                {getFieldDecorator(item.value, {
                  rules: item.rules || []
                })(
                  <Input type={item.type || 'text'}/>
                )}
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
