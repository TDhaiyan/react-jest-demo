import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, message, Select, DatePicker } from 'antd';
import { dataSource } from '../../mockData/data';
import { useNavigate } from 'react-router-dom'

interface FormData {
  priority: string;
  name: string;
  description: string;
  time: string;
  deadline: string;
  status: "done" | "in progress" | "todo";
  key: string;
}

const Detail: React.FC = () => {
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const formDataWithKey = {
      ...data,
      key: Date.now().toString()
    };
    dataSource.push(formDataWithKey);
    navigate('/todo')
    message.success('successful!');
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: '0 auto' }}
    >
      <Form.Item
        label="priority"
        validateStatus={errors.priority ? 'error' : ''}
        help={errors.priority?.message}
      >
        <Controller
          name="priority"
          control={control}
          rules={{ required: 'priority is required' }}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="name"
        validateStatus={errors.name ? 'error' : ''}
        help={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: 'name is required' }}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="description"
        validateStatus={errors.description ? 'error' : ''}
        help={errors.description?.message}
      >
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="time"
        validateStatus={errors.time ? 'error' : ''}
        help={errors.time?.message}
      >
        <Controller
          name="time"
          control={control}
          rules={{ required: 'time is required' }}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="deadline"
        validateStatus={errors.deadline ? 'error' : ''}
        help={errors.deadline?.message}
      >
        <Controller
          name="deadline"
          control={control}
          rules={{ required: 'deadline is required' }}
          render={({ field }) =>  <DatePicker {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="status"
        validateStatus={errors.status ? 'error' : ''}
        help={errors.status?.message}
      >
        <Controller
          name="status"
          control={control}
          rules={{ required: 'status is required' }}
          render={({ field }) => <Select {...field}>
            <Select.Option value="demo">done</Select.Option>
            <Select.Option value="demo">in progress</Select.Option>
            <Select.Option value="demo">todo</Select.Option>
          </Select>}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
         submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Detail;

