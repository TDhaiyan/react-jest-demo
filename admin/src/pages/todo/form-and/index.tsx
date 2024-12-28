import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const FormAnd: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Priority">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Name">
        <Input />
      </Form.Item>

      <Form.Item label="Description">
        <Input />
      </Form.Item>
      <Form.Item label="Spend time">
        <Input />
      </Form.Item>
      <Form.Item label="Deadline">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Status">
        <Select>
          <Select.Option value="demo">done</Select.Option>
          <Select.Option value="demo">in progress</Select.Option>
          <Select.Option value="demo">todo</Select.Option>
        </Select>
      </Form.Item>






      <Button type="primary" htmlType="submit">
        Submit
      </Button>

    </Form>
  );
};

export default FormAnd;
