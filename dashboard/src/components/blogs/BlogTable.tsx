import React from 'react';
import { Table, Space, Tag, Button, Popconfirm, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Blog } from '../../types';

interface BlogTableProps {
  data: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (key: string) => void;
}

const BlogTable: React.FC<BlogTableProps> = ({ data, onEdit, onDelete }) => {
  const columns: ColumnsType<Blog> = [
    {
      title: 'Blog info',
      key: 'blogInfo',
      render: (_, record) => (
        <div className="flex items-center">
          <img 
            src={record.image || 'https://placehold.co/100x100?text=Blog'} 
            alt={record.title} 
            className="w-24 h-14 object-cover rounded-lg border border-slate-100 shadow-sm flex-shrink-0" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100?text=Blog';
            }}
          />
          <div className="ml-3 flex flex-col justify-center">
            <span className="font-semibold text-slate-800 text-sm leading-snug">
              {record.title}
            </span>
            <span className="text-slate-500 text-xs mt-0.5">
              By {record.author || 'Unknown'}
            </span>
          </div>
        </div>
      ),
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <Tag color={category === 'Blogs' ? 'blue' : 'green'}>
          {category}
        </Tag>
      ),
      filters: [
        { text: 'Blogs', value: 'Blogs' },
        { text: 'News', value: 'News' },
      ],
      onFilter: (value: any, record) => record.category.indexOf(value) === 0,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      className: "text-slate-500"
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'published' ? 'gold' : 'default'} variant="filled">
          {(status || 'draft').toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="View">
            <Button type="text" icon={<EyeOutlined />} className="text-slate-400 hover:text-blue-500" />
          </Tooltip>
          <Tooltip title="Edit">
            <Button type="text" icon={<EditOutlined />} onClick={() => onEdit(record)} className="text-slate-400 hover:text-amber-500" />
          </Tooltip>
          <Popconfirm
            title="Delete the blog"
            description="Are you sure to delete this blog?"
            onConfirm={() => onDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete">
              <Button type="text" danger icon={<DeleteOutlined />} className="text-slate-400 hover:text-red-500" />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} articles`,
        }}
        rowKey="key"
        className="border-none"
      />
    </div>
  );
};

export default BlogTable;
