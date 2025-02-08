import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, message, Select, DatePicker } from 'antd';
import { dataSource } from '../../mockData/data';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ItemSchema } from '../../mockData/data';
import z from 'zod';

// interface FormData {
//   priority: string;
//   name: string;
//   description: string;
//   time: string;
//   deadline: string;
//   status: "done" | "in progress" | "todo";
//   key: string;
// }


const SubmitButton = styled(Button)`
  max-width: 100px;
  margin-top: 12px;`

const Detail: React.FC = () => {
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm<z.infer<typeof ItemSchema>>();

  const onSubmit = (data: unknown) => {
    const formDataWithKey = {
      ...data,
      key: Date.now().toString()
    };

    const res = ItemSchema.safeParse(formDataWithKey)

    if (!res.success) {
      message.error(res.error.errors[0].message)
      return
    }
    dataSource.push(res.data);
    navigate('/todo')
    message.success('successful!');
  };

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      style={{ maxWidth: 600 }}
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
        <SubmitButton type="primary" htmlType="submit" block>
         submit
        </SubmitButton>
      </Form.Item>
    </Form>
  );
};

export default Detail;

