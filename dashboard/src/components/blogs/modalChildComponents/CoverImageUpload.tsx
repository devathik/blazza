import React from 'react';
import { Upload, message, Button, Tag } from 'antd';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import type { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface CoverImageUploadProps {
  imageUrl?: string;
  onImageChange: (url?: string) => void;
}

const CoverImageUpload: React.FC<CoverImageUploadProps> = ({ imageUrl, onImageChange }) => {

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG/WEBP file!');
      return Upload.LIST_IGNORE;
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must be smaller than 10MB!');
      return Upload.LIST_IGNORE;
    }

    getBase64(file, (url) => {
      onImageChange(url);
    });

    return false;
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'removed') {
      onImageChange(undefined);
    }
  };

  return (
    <div className="space-y-4">
      {!imageUrl && (
        <Upload.Dragger
          name="avatar"
          className="!bg-slate-50 !border-slate-200 hover:!border-blue-400 !rounded-2xl transition-all"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <div className="py-8">
            <p className="ant-upload-drag-icon">
              <InboxOutlined className="text-blue-500 text-4xl" />
            </p>
            <p className="ant-upload-text font-semibold text-slate-700">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint text-slate-400 px-4">
              Support for a single upload. High-resolution images up to 10MB.
            </p>
          </div>
        </Upload.Dragger>
      )}

      {imageUrl && (
        <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md bg-white">
          <img 
            src={imageUrl} 
            alt="Cover Preview" 
            className="w-full aspect-video object-cover" 
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button 
              type="primary" 
              danger 
              shape="circle" 
              icon={<DeleteOutlined />} 
              onClick={() => onImageChange(undefined)}
              className="shadow-lg"
            />
          </div>
          <div className="p-3 flex items-center justify-between bg-slate-50 border-t border-slate-100">
            <div className="flex flex-col truncate">
              <span className="text-xs font-semibold text-slate-700 truncate">Cover Image</span>
              <span className="text-[10px] text-slate-400 uppercase">Uploaded successfully</span>
            </div>
            <Tag color="success" className="mr-0 border-none rounded-full px-2 py-0 text-[10px] font-bold">READY</Tag>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverImageUpload;
