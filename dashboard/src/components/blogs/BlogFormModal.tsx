import React, { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";
import type { Blog } from "../../types";
import RichTextEditor from "./modalChildComponents/RichTextEditor";
import CoverImageUpload from "./modalChildComponents/CoverImageUpload";
import BlogSidebar from "./modalChildComponents/BlogSidebar";

const { TextArea } = Input;

interface BlogFormModalProps {
  open: boolean;
  editingBlog: Blog | null;
  onCancel: () => void;
  onFinish: (values: any) => void;
}

const BlogFormModal: React.FC<BlogFormModalProps> = ({
  open,
  editingBlog,
  onCancel,
  onFinish,
}) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (open) {
      if (editingBlog) {
        form.setFieldsValue(editingBlog);
        setImageUrl(editingBlog.image);
        setContent(editingBlog.content || "");
      } else {
        form.resetFields();
        setImageUrl(undefined);
        setContent("");
      }
    }
  }, [open, editingBlog, form]);

  const handleFormFinish = (values: any) => {
    const status = form.getFieldValue("status");
    onFinish({ ...values, status: status || "draft", content, image: imageUrl || values.image });
  };

  const handleImageChange = (url?: string) => {
    setImageUrl(url);
    form.setFieldValue("image", url);
  };

  return (
    <Modal
      title={
        <span className="text-xl font-bold text-slate-800">
          {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
        </span>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
      width={1300}
      destroyOnHidden
      className="rounded-2xl"
      centered
      focusable={{ trap: false }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormFinish}
        initialValues={{ status: "draft", category: "Blogs" }}
        className="mt-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Form.Item
              name="title"
              label={
                <span className="text-base font-semibold text-slate-700">
                  Post Title
                </span>
              }
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input
                placeholder="Enter a descriptive title"
                className="h-12 text-lg rounded-xl"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-base font-semibold text-slate-700">
                  Content Description
                </span>
              }
            >
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="Write your blog content here..."
              />
            </Form.Item>

            <Form.Item
              name="excerpt"
              label={
                <span className="text-base font-semibold text-slate-700">
                  Short Summary (Excerpt)
                </span>
              }
              rules={[
                { required: true, message: "Please enter a short excerpt" },
              ]}
            >
              <TextArea
                rows={3}
                placeholder="A brief summary for search results and previews..."
                className="rounded-xl p-4 text-base"
              />
            </Form.Item>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <Form.Item
              label={
                <span className="text-base font-semibold text-slate-700">
                  Cover Image
                </span>
              }
              extra={
                <span className="text-xs text-slate-400">
                  High-resolution images (JPG, PNG, WEBP) up to 10MB.
                </span>
              }
            >
              <CoverImageUpload
                imageUrl={imageUrl}
                onImageChange={handleImageChange}
              />
            </Form.Item>

            <BlogSidebar editingBlog={!!editingBlog} onCancel={onCancel} />
          </div>
        </div>
      </Form>
    </Modal>
  );
};
export default BlogFormModal;
