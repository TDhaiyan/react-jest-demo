import React , { useState }from 'react';
import { Table , Tag} from 'antd';
import z from 'zod';
import type {  TableProps } from 'antd';


const colorMap= {
  'done':'green',
  'in progress':'blue',
  'todo':'red',
}

const ItemSchema = z.object({
  key: z.string(),
  priority: z.string(),
  name: z.string(),
  time: z.string(),
  deadline: z.string(),
  status: z.enum(['done', 'in progress', 'todo']),
  description: z.string(),
});

const ItemArraySchema = z.array(ItemSchema);

const dataSource: z.infer<typeof ItemArraySchema> = [
  {
    key: '1',
    priority: '1',
    name: 'task',
    time: 'one day',
    deadline: '2024-12-20',
    status  : 'done',
    description:'test'
  },
  {
    key: '2',
    priority: '2',
    name: 'buy book',
    time: 'lauch time',
    deadline: '2024-12-21',
    status  : 'in progress',
    description:'test'
  },
  {
    key: '3',
    priority: '3',
    name: 'english',
    time: 'subway time',
    deadline: '2024-12-20',
    status  : 'done',
    description:'test'
  },
];

const columns = [
  {
    title: 'priority',
    dataIndex: 'priority',
    key: 'priority',
  },

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },{
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: any, { status }: { status:  z.infer<typeof ItemSchema>['status'] }) => {
      return (
        <Tag color={colorMap[status]} key={status}>
          {status}
        </Tag>
      );
    }
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (row: any,) => {
  //     return (
  //       <a href={`/todo/${row.key}`}>edit
  //       </a>)
  //   }
  // },
  {
    title: 'graph',
    dataIndex: '',
    key: 'description',
    render: () => {
      return (
        <a href={`/graph/chart`}>goto
        </a>)
    }
  },

];




const TodoPage: React.FC = () => {
  const [selectionKey, setSelectionKey] = useState<React.Key[]>([]);

  const rowSelection: TableProps< z.infer<typeof ItemSchema>>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: z.infer<typeof ItemSchema>[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectionKey([...selectedRowKeys]);

      console.log(`selectionKey: ${selectionKey}`);
    },
    getCheckboxProps: (record: z.infer<typeof ItemSchema>) => ({
      disabled: record.name === 'Name',
      name: record.name,
    }),
  };


  return <Table
  rowSelection={{ ...rowSelection }}

  dataSource={dataSource} columns={columns} />
};

export default TodoPage;
