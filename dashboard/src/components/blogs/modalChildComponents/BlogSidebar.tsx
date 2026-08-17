import React, { useState } from 'react';
import { Form, Input, Select, Divider, Button, Space, Checkbox } from 'antd';
import KeywordsInput from './KeywordsInput';

const { Option } = Select;

interface BlogSidebarProps {
  editingBlog: boolean;
  onCancel: () => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ editingBlog, onCancel }) => {
  const [sameAsPost, setSameAsPost] = useState(true);
  const form = Form.useFormInstance();

  const handleSaveDraft = () => {
    form.setFieldValue('status', 'draft');
    form.submit();
  };

  const handlePublish = () => {
    form.setFieldValue('status', 'published');
    form.submit();
  };

  return (
    <div className="space-y-6">
      <Divider className="lg:hidden" />
      


      <Form.Item
        name="category"
        label={<span className="text-base font-semibold text-slate-700">Category</span>}
        rules={[{ required: true }]}
      >
        <Select className="h-10">
          <Option value="Blogs">Blogs</Option>
          <Option value="News">News</Option>
        </Select>
      </Form.Item>

      <Divider className="my-4" />
      
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-slate-700 m-0">Meta Title & Description</h3>
        <Checkbox 
          checked={sameAsPost} 
          onChange={(e) => setSameAsPost(e.target.checked)}
          className="text-slate-600"
        >
          Same as Post title & Post summary
        </Checkbox>

        {!sameAsPost && (
          <div className="space-y-4 pt-2">
            <Form.Item
              name="metaTitle"
              label={<span className="text-sm font-medium text-slate-600">Meta Title</span>}
              className="mb-0"
            >
              <Input placeholder="Custom meta title" className="h-10 rounded-lg" />
            </Form.Item>

            <Form.Item
              name="metaDescription"
              label={<span className="text-sm font-medium text-slate-600">Meta Description</span>}
              className="mb-0"
            >
              <Input.TextArea rows={3} placeholder="Custom meta description" className="rounded-lg p-3" />
            </Form.Item>
          </div>
        )}

        <Form.Item
          name="keywords"
          label={<span className="text-sm font-medium text-slate-600">Keywords</span>}
          className="mt-4"
        >
          <KeywordsInput />
        </Form.Item>
      </div>

      <div className="pt-6 sticky bottom-0 bg-white z-10">
        <div className="flex flex-col gap-2">
          <Space className="w-full justify-between" style={{ display: 'flex' }}>
            <Button onClick={onCancel} className="h-12 px-4 rounded-xl border-slate-200 flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSaveDraft}
              className="h-12 px-4 rounded-xl border-blue-200 text-blue-600 hover:text-blue-700 flex-1"
            >
              Save as Draft
            </Button>
          </Space>
          <Button 
            type="primary" 
            onClick={handlePublish}
            className="w-full h-12 rounded-xl bg-blue-600 shadow-lg shadow-blue-200"
          >
            {editingBlog ? "Save Changes" : "Publish Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
