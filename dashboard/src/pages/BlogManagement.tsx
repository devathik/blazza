import React, { useState } from 'react';
import { message } from 'antd';
import type { Blog } from '../types';
import BlogHeader from '../components/blogs/BlogHeader';
import BlogSearch from '../components/blogs/BlogSearch';
import BlogTable from '../components/blogs/BlogTable';
import BlogFormModal from '../components/blogs/BlogFormModal';

// Mock initial data
const initialData: Blog[] = [
  {
    key: '1',
    _id: '1',
    title: 'Understanding Funeral Costs',
    excerpt: 'A comprehensive guide to funeral expenses and how to plan effectively.',
    author: 'Scott Harris',
    date: '12 Oct 2025',
    category: 'Blogs',
    image: '/images/btf/image-1.webp',
    status: 'published',
  },
  {
    key: '2',
    _id: '2',
    title: 'How to Support a Grieving Friend',
    excerpt: '5 meaningful ways to offer genuine support without overwhelming them.',
    author: 'Louise M.',
    date: '05 Nov 2025',
    category: 'News',
    image: '/images/btf/image-2.webp',
    status: 'published',
  },
  {
    key: '3',
    _id: '3',
    title: 'The Importance of Pre-planning',
    excerpt: 'Why pre-planning your funeral can be a gift to your family.',
    author: 'Scott Harris',
    date: '20 Nov 2025',
    category: 'Blogs',
    image: '/images/btf/image-3.webp',
    status: 'draft',
  }
];

const BlogManagement: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleShowModal = (blog?: Blog) => {
    setEditingBlog(blog || null);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  const handleDelete = (key: string) => {
    setBlogs(blogs.filter(item => item.key !== key));
    message.success('Blog deleted successfully');
  };

  const stripHtml = (html: string) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
  };

  const handleFinish = (values: any) => {
    const plainContent = stripHtml(values.content || '');
    const updatedValues = { ...values, content: plainContent };

    // Console log the final data as we don't have a backend right now
    const logData = {
      ...updatedValues,
      date: editingBlog ? editingBlog.date : new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    };
    console.log("Final Blog/News Data ", logData);

    if (editingBlog) {
      const newData = blogs.map(item => {
        if (item.key === editingBlog.key) {
          return { ...item, ...updatedValues };
        }
        return item;
      });
      setBlogs(newData);
      message.success(`Blog updated and saved as ${values.status || editingBlog.status}`);
    } else {
      const newBlog: Blog = {
        key: Date.now().toString(),
        _id: Date.now().toString(),
        ...updatedValues,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      };
      setBlogs([newBlog, ...blogs]);
      message.success(`Blog created and saved as ${values.status}`);
    }
    setIsModalOpen(false);
  };

  const filteredData = blogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || blog.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="blog-management">
      <BlogHeader onAddClick={() => handleShowModal()} />
      
      <BlogSearch 
        searchText={searchText} 
        onSearchChange={setSearchText} 
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <BlogTable 
        data={filteredData} 
        onEdit={handleShowModal} 
        onDelete={handleDelete} 
      />

      <BlogFormModal 
        open={isModalOpen}
        editingBlog={editingBlog}
        onCancel={handleCancel}
        onFinish={handleFinish}
      />
    </div>
  );
};

export default BlogManagement;
