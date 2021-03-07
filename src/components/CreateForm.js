import React from 'react';
import { Form, Input } from 'antd';

function CreateForm() {
  return (
    <div>
      <Form>
        <Form.Item label="Test">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateForm;
