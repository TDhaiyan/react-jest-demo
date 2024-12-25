import React from 'react';
import { Line, Pie } from '@ant-design/charts';
import { Card, Space } from 'antd';
import { dataSource } from '../../mockData/data';

const DemoChart: React.FC = () => {

  const formatData = dataSource.reduce((acc, item) => {
    const existing = acc.find(i => i.deadline === item.deadline);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ deadline: item.deadline, value: 1 });
    }
    return acc;
  }, [] as { deadline: string, value: number }[]);


  const lineConfig = {
    data: formatData,
    xField: 'deadline',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  const pieConfig = {
    data: formatData,
    angleField: 'value',
    colorField: 'deadline',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  return (
    <div className="p-4" style={{ width: '100%' }}>
      <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
        <Card title="Line Chart" style={{ width: '100%' }}>
          <div style={{ width: '100%', minHeight: '300px' }}>
            <Line {...lineConfig} />
          </div>
        </Card>
        <Card title="Pie Chart" style={{ width: '100%' }}>
          <div style={{ width: '100%', minHeight: '300px' }}>
            <Pie {...pieConfig} />
          </div>
        </Card>
      </Space>
    </div>
  );
};

export default DemoChart;
