import React from 'react';
import { Card, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface BlogSearchProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({
  searchText,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <Card className="mb-6 rounded-xl border-slate-200 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Input
          placeholder="Search by title or author..."
          prefix={<SearchOutlined className="text-slate-400" />}
          value={searchText}
          onChange={e => onSearchChange(e.target.value)}
          className="max-w-md h-10 rounded-lg flex-1"
          allowClear
        />
        <div className="flex items-center gap-3">
          <Select
            value={categoryFilter}
            onChange={onCategoryChange}
            className="w-40 h-10"
            placeholder="Category"
          >
            <Select.Option value="all">All Categories</Select.Option>
            <Select.Option value="Blogs">Blogs</Select.Option>
            <Select.Option value="News">News</Select.Option>
          </Select>
          <Select
            value={statusFilter}
            onChange={onStatusChange}
            className="w-40 h-10"
            placeholder="Status"
          >
            <Select.Option value="all">All Statuses</Select.Option>
            <Select.Option value="published">Published</Select.Option>
            <Select.Option value="draft">Draft</Select.Option>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default BlogSearch;
