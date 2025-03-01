import React , { useState }from 'react';
import { Table, Tag, Button } from 'antd';
import z from 'zod';
import type {  TableProps } from 'antd';
import { dataSource, ItemSchema} from '../mockData/data.ts';
import { useNavigate } from 'react-router-dom';


const colorMap= {
  'done':'green',
  'in progress':'blue',
  'todo':'red',
}

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
  //       <a href={`/edit/${row.key}`}>edit
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
  const [selectionKey, setSelectionKey] = useState<React.Key[]>([])
  const navigate = useNavigate()

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
  }

  const gotoDetail = () => {
    navigate(`/detail`)
  }


  return (
  <>
    <Button type="primary" style={{marginBottom: 12 }} onClick={gotoDetail}>New</Button>

    <Table rowSelection={{ ...rowSelection }} dataSource={dataSource} columns={columns} />
  </>

  )
};

export default TodoPage;
