import React from 'react';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface BlogHeaderProps {
  onAddClick: () => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ onAddClick }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <Title level={2} className="!m-0 !text-slate-800">Blog & News Management</Title>
        <Text className="text-slate-500">Manage your website's articles and updates from one central place</Text>
      </div>
      <Button 
        type="primary" 
        icon={<PlusOutlined />} 
        size="large" 
        onClick={onAddClick}
        className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-lg shadow-md"
      >
        Add New Blog
      </Button>
    </div>
  );
};

export default BlogHeader;
